import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import PartijenHuurderForm from '../../components/Formulier/PartijenHuurderForm';
import { RouteProp } from '@react-navigation/native';

type PartijenScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UnitBeschrijving'>;
  route: RouteProp<RootStackParamList, 'PartijenHuurder'>;
};

export default function PartijenHuurderScreen({ navigation, route }: PartijenScreenProps) {
  const [huurderNaam, setHuurderNaam] = useState('');
  const [huurderGeboortedatum, setHuurderGeboortedatum] = useState('');
  const [huurderTelefoonnummer, setHuurderTelefoonnummer] = useState('');
  const [huurderEmail, setHuurderEmail] = useState('');
  const [huurderNaamError, setHuurderNaamError] = useState('');
  const [huurderGeboortedatumError, setHuurderGeboortedatumError] = useState('');
  const [huurderTelefoonnummerError, setHuurderTelefoonnummerError] = useState('');
  const [huurderEmailError, setHuurderEmailError] = useState('');

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

    if (huurderNaam.trim() === '') {
      setHuurderNaamError('Naam is verplicht');
      isValid = false;
    } else {
      setHuurderNaamError('');
    }

    if (huurderGeboortedatum.trim() === '' || !isValidDate(huurderGeboortedatum)) {
      setHuurderGeboortedatumError('Geboortedatum is verplicht (DD-MM-YYYY)');
      isValid = false;
    } else {
      setHuurderGeboortedatumError('');
    }

    if (huurderTelefoonnummer.trim() === '') {
      setHuurderTelefoonnummerError('Telefoonnummer is verplicht');
      isValid = false;
    } else {
      setHuurderTelefoonnummerError('');
    }

    if (huurderEmail.trim() === '' || !huurderEmail.includes('@')) {
      setHuurderEmailError('Geldig emailadres is verplicht');
      isValid = false;
    } else {
      setHuurderEmailError('');
    }

    return isValid;
  };

  const handleNextPage = () => {
    if (validateFields()) {
      navigation.navigate('UnitBeschrijving', {
        ...route.params,
        huurderNaam,
        huurderGeboortedatum,
        huurderTelefoonnummer,
        huurderEmail,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>

      <PartijenHuurderForm
        naam={huurderNaam}
        setNaam={setHuurderNaam}
        naamError={huurderNaamError}
        geboortedatum={huurderGeboortedatum}
        setGeboortedatum={setHuurderGeboortedatum}
        geboortedatumError={huurderGeboortedatumError}
        telefoonnummer={huurderTelefoonnummer}
        setTelefoonnummer={setHuurderTelefoonnummer}
        telefoonnummerError={huurderTelefoonnummerError}
        email={huurderEmail}
        setEmail={setHuurderEmail}
        emailError={huurderEmailError}
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