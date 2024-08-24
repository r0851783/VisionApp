import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/index';
import { RouteProp } from '@react-navigation/native';

type DataScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PartijenVerhuurder'>
  route: RouteProp<RootStackParamList, 'Data'>;
};

export default function DataScreen({ navigation, route }: DataScreenProps) {
  const [intredeDatum, setIntredeDatum] = useState('');
  const [uittredeDatum, setUittredeDatum] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIntredeChange = (text: string) => {
    setIntredeDatum(text);
    setErrorMessage('');
  };

  const handleUittredeChange = (text: string) => {
    setUittredeDatum(text);
    setErrorMessage('');
  };

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
  
  const validateDates = () => {
    if (!intredeDatum) {
      setErrorMessage('Intrede datum is verplicht.');
      return false;
    }

    if (!uittredeDatum) {
      setErrorMessage('Uittrede datum is verplicht.');
      return false;
    }
    
    if (!isValidDate(intredeDatum)) {
      setErrorMessage('De intrede datum is niet in het juiste formaat (DD-MM-YYYY).');
      return false;
    }

    if (!isValidDate(uittredeDatum)) {
      setErrorMessage('De uittrede datum is ongeldig of niet in het juiste formaat (DD-MM-YYYY).');
      return false;
    }

    const intredeDateObj = new Date(intredeDatum.split('-').reverse().join('-'));
    const uittredeDateObj = new Date(uittredeDatum.split('-').reverse().join('-'));

    if (uittredeDateObj < intredeDateObj) {
      setErrorMessage('Uittrede datum kan niet voor de intrede datum zijn.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleNextPage = () => {
      if (validateDates()) {
          navigation.navigate('PartijenVerhuurder', {
              ...route.params,
              intredeDatum,
              uittredeDatum,
          });
      }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 5}]}>Datum intrede</Text>
        <TextInput
          style={styles.nameButton}
          placeholder="DD-MM-YYY"
          value={intredeDatum}
          onChangeText={handleIntredeChange}
          keyboardType="default"
        />
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20 }]}>Datum uittrede</Text>
        <TextInput
          style={styles.nameButton}
          placeholder="DD-MM-YYY"
          value={uittredeDatum}
          onChangeText={handleUittredeChange}
          keyboardType="default"
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>
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
