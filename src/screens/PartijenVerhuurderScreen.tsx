import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import PartijenVerhuurderForm from '../../components/Formulier/PartijenVerhuurderForm';
import { RouteProp } from '@react-navigation/native';

type PartijenVerhuurderScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PartijenHuurder'>;
  route: RouteProp<RootStackParamList, 'PartijenVerhuurder'>;
};

export default function PartijenVerhuurderScreen({ navigation, route }: PartijenVerhuurderScreenProps) {
  const [verhuurderNaam, setVerhuurderNaam] = useState('Henk Claes');
  const [verhuurderGeboortedatum, setVerhuurderGeboortedatum] = useState('03-10-1970');
  const [verhuurderTelefoonnummer, setVerhuurderTelefoonnummer] = useState('0497 25 19 22');
  const [verhuurderEmail, setVerhuurderEmail] = useState('Henk.claes@verhuur.be');

  const [verhuurderNaamError, setVerhuurderNaamError] = useState('');
  const [verhuurderGeboortedatumError, setVerhuurderGeboortedatumError] = useState('');
  const [verhuurderTelefoonnummerError, setVerhuurderTelefoonnummerError] = useState('');
  const [verhuurderEmailError, setVerhuurderEmailError] = useState('');

  const [editable, setEditable] = useState(false);

  const isValidDate = (dateString: string) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if (!regex.test(dateString)) {return false;}

    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    );
  };

  const validateFields = () => {
    let isValid = true;

    if (verhuurderNaam.trim() === '') {
      setVerhuurderNaamError('Naam is verplicht');
      isValid = false;
    } else {
      setVerhuurderNaamError('');
    }

    if (verhuurderGeboortedatum.trim() === '' || !isValidDate(verhuurderGeboortedatum)) {
      setVerhuurderGeboortedatumError('Geboortedatum is verplicht (DD-MM-YYYY)');
      isValid = false;
    } else {
      setVerhuurderGeboortedatumError('');
    }

    if (verhuurderTelefoonnummer.trim() === '') {
      setVerhuurderTelefoonnummerError('Telefoonnummer is verplicht');
      isValid = false;
    } else {
      setVerhuurderTelefoonnummerError('');
    }

    if (verhuurderEmail.trim() === '' || !verhuurderEmail.includes('@')) {
      setVerhuurderEmailError('Geldig emailadres is verplicht');
      isValid = false;
    } else {
      setVerhuurderEmailError('');
    }

    return isValid;
  };

  const handleNextPage = () => {
    if (validateFields()) {
      navigation.navigate('PartijenHuurder', {
        ...route.params,
        verhuurderNaam,
        verhuurderGeboortedatum,
        verhuurderTelefoonnummer,
        verhuurderEmail,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>

      <PartijenVerhuurderForm
        naam={verhuurderNaam}
        setNaam={setVerhuurderNaam}
        naamError={verhuurderNaamError}
        geboortedatum={verhuurderGeboortedatum}
        setGeboortedatum={setVerhuurderGeboortedatum}
        geboortedatumError={verhuurderGeboortedatumError}
        telefoonnummer={verhuurderTelefoonnummer}
        setTelefoonnummer={setVerhuurderTelefoonnummer}
        telefoonnummerError={verhuurderTelefoonnummerError}
        email={verhuurderEmail}
        setEmail={setVerhuurderEmail}
        emailError={verhuurderEmailError}
        editable={editable}
        setEditable={setEditable}
      />

      <View style={styles.footer}>
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity
            style={styles.footerButtonSmall} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.startButton}>Vorige pagina</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButtonSmall}
            onPress={handleNextPage}
          >
            <Text style={styles.startButton}>Volgende pagina</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
