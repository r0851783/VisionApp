import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'plaatsbeschrijving';

enablePromise(true);

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return new Promise((resolve, reject) => {
    const db = openDatabase(
      {
        name: 'vision.db',
        location: 'default',
      },
      () => {
        console.log('Database connection established');
         console.log('Database file path:', db);
        resolve(db);
      },
      error => {
        console.error('Error opening database:', error);
        reject(error);
      }
    );
  });
};

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                selectedNames TEXT NULL,
                selectedOption TEXT NULL,
                intredeDatum TEXT NULL,
                uittredeDatum TEXT NULL,
                verhuurderNaam TEXT NULL,
                verhuurderGeboortedatum TEXT NULL,
                verhuurderTelefoonnummer TEXT NULL,
                verhuurderEmail TEXT NULL,
                huurderNaam TEXT NULL,
                huurderGeboortedatum TEXT NULL,
                huurderTelefoonnummer TEXT NULL,
                huurderEmail TEXT NULL,
                straat TEXT NULL,
                huisnummer TEXT NULL,
                busnummer TEXT NULL,
                postcode TEXT NULL,
                stad TEXT NULL,
                woningType TEXT NULL,
                imageUris TEXT NULL,
                voordeur TEXT NULL,
                garage TEXT NULL,
                brievenbus TEXT NULL,
                text TEXT NULL,
                created_at TEXT NOT NULL
            );`;

  try {
    await db.executeSql(query);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Failed to create table:', error);
    throw error;
  }
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};

export const insertPlaatsbeschrijving = async (
  db: SQLiteDatabase,
  data: any
): Promise<void> => {
  const insertQuery = `INSERT INTO ${tableName} (
      selectedNames, selectedOption, intredeDatum, uittredeDatum, verhuurderNaam, verhuurderGeboortedatum,
      verhuurderTelefoonnummer, verhuurderEmail, huurderNaam, huurderGeboortedatum, huurderTelefoonnummer,
      huurderEmail, straat, huisnummer, busnummer, postcode, stad, woningType, imageUris, voordeur, garage, brievenbus, text, created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const currentTimestamp = formatDate(new Date());

  try {
    await db.executeSql(insertQuery, [
      data.selectedNames.join(', '),
      data.selectedOption,
      data.intredeDatum,
      data.uittredeDatum,
      data.verhuurderNaam,
      data.verhuurderGeboortedatum,
      data.verhuurderTelefoonnummer,
      data.verhuurderEmail,
      data.huurderNaam,
      data.huurderGeboortedatum,
      data.huurderTelefoonnummer,
      data.huurderEmail,
      data.straat,
      data.huisnummer,
      data.busnummer,
      data.postcode,
      data.stad,
      data.woningType,
      data.imageUris ? data.imageUris.join(', ') : '',
      data.voordeur,
      data.garage,
      data.brievenbus,
      data.text,
      currentTimestamp,
    ]);
  } catch (error) {
    console.error('Error executing insert query:', error);
    throw error;
  }
};

export const getPlaatsbeschrijvingen = async (db: SQLiteDatabase): Promise<any[]> => {
  const selectQuery = `SELECT * FROM ${tableName}`;
  const results = await db.executeSql(selectQuery);

  const plaatsbeschrijvingen: any[] = [];
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      const item = result.rows.item(index);
      item.imageUris = item.imageUris 
        ? item.imageUris.split(',').map((uri: string) => uri.trim()).filter((uri: string) => uri.length > 0)
        : [];
      plaatsbeschrijvingen.push(item);
    }
  });
  return plaatsbeschrijvingen;
};


