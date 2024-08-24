import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import SleutelForm from '../../components/Formulier/SleutelForm';
import { RouteProp } from '@react-navigation/native';

type SleutelScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Opmerkingen'>;
  route: RouteProp<RootStackParamList, 'Sleutels'>;
};

export default function SleutelScreen({ navigation, route }: SleutelScreenProps) {
  const [voordeur, setVoordeur] = useState('');
  const [garage, setGarage] = useState('');
  const [brievenbus, setBrievenbus] = useState('');
  const [voordeurNvt, setVoordeurNvt] = useState(false);
  const [garageNvt, setGarageNvt] = useState(false);
  const [brievenbusNvt, setBrievenbusNvt] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateAndProceed = (): boolean => {
    let valid = true;

    if (!voordeurNvt && !voordeur) {
      setErrorMessage('Voer een aantal in of selecteer niet van toepassing.');
      valid = false;
    }

    if (!garageNvt && !garage) {
      setErrorMessage('Voer een aantal in of selecteer niet van toepassing.');
      valid = false;
    }

    if (!brievenbusNvt && !brievenbus) {
      setErrorMessage('Voer een aantal in of selecteer niet van toepassing.');
      valid = false;
    }

    return valid;
  };

  const handleNextPage = () => {
    if (validateAndProceed()) {
      navigation.navigate('Opmerkingen', {
        ...route.params,
        voordeur,
        garage,
        brievenbus
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15}]}>Sleutels</Text>
        <SleutelForm
          label="Voordeur"
          quantity={voordeur}
          setQuantity={setVoordeur}
          notApplicable={voordeurNvt}
          setNotApplicable={setVoordeurNvt}
          errorMessage={errorMessage}
        />

        <SleutelForm
          label="Brievenbus"
          quantity={brievenbus}
          setQuantity={setBrievenbus}
          notApplicable={brievenbusNvt}
          setNotApplicable={setBrievenbusNvt}
          errorMessage={errorMessage}
        />

        <SleutelForm
          label="Garage"
          quantity={garage}
          setQuantity={setGarage}
          notApplicable={garageNvt}
          setNotApplicable={setGarageNvt}
          errorMessage={errorMessage}
        />
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