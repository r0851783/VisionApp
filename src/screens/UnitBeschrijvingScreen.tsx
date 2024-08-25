import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { styles } from '../styles/GlobalStyles';
import UnitBeschrijvingForm  from '../../components/Formulier/UnitBeschrijvingForm';
import { RouteProp } from '@react-navigation/native';

type UnitBeschrijvingProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UnitType'>;
  route: RouteProp<RootStackParamList, 'UnitBeschrijving'>;
};

export default function UnitBeschrijving({ navigation, route }: UnitBeschrijvingProps) {
  const [straat, setStraat] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [busnummer, setBusnummer] = useState('');
  const [postcode, setPostcode] = useState('');
  const [stad, setStad] = useState('');
  const [straatError, setStraatError] = useState('');
  const [huisnummerError, setHuisnummerError] = useState('');
  const [postcodeError, setPostcodeError] = useState('');
  const [stadError, setStadError] = useState('');

  const validateFields = () => {
    let isValid = true;

    if (straat.trim() === '') {
      setStraatError('Straat is verplicht');
      isValid = false;
    } else {
      setStraatError('');
    }

    if (huisnummer.trim() === '') {
      setHuisnummerError('Huisnummer is verplicht');
      isValid = false;
    } else {
      setHuisnummerError('');
    }

    if (postcode.trim() === '') {
      setPostcodeError('Postcode is verplicht');
      isValid = false;
    } else {
      setPostcodeError('');
    }

    if (stad.trim() === '') {
      setStadError('Stad is verplicht');
      isValid = false;
    } else {
      setStadError('');
    }

    return isValid;
  };

  const handleNextPage = () => {
    if (validateFields()) {
      navigation.navigate('UnitType', {
        ...route.params,
        straat,
        huisnummer,
        busnummer,
        postcode,
        stad
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <UnitBeschrijvingForm
        straat={straat}
        setStraat={setStraat}
        straatError={straatError}
        huisnummer={huisnummer}
        setHuisnummer={setHuisnummer}
        huisnummerError={huisnummerError}
        busnummer={busnummer}
        setBusnummer={setBusnummer}
        postcode={postcode}
        setPostcode={setPostcode}
        postcodeError={postcodeError}
        stad={stad}
        setStad={setStad}
        stadError={stadError}
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