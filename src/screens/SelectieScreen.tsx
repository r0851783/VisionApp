import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';

type SelectieScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Data'>;
  route: RouteProp<RootStackParamList, 'Selectie'>;
};

export default function SelectieScreen({ navigation, route }: SelectieScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    setErrorMessage('');
  };

  const handlePreviousPage = () => {
    navigation.navigate('Home');
  };

  const handleNextPage = () => {
    if (!selectedOption) {
      setErrorMessage('Selecteer een type plaatsbeschrijving.');
    } else {
      navigation.navigate('Data', {
        ...route.params,
        selectedOption,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15 }]}>Type plaatsbeschrijving</Text>
        <TouchableOpacity
          style={[
            styles.nameButton,
            selectedOption === 'Intrede' && styles.nameButtonSelected,
          ]}
          onPress={() => {
            handleSelection('Intrede');
          }}
        >
          <Text style={styles.nameButtonText}>Intrede</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.nameButton,
            selectedOption === 'Uittrede' && styles.nameButtonSelected,
          ]}
          onPress={() => {
            handleSelection('Uittrede');
          }}
        >
          <Text style={styles.nameButtonText}>Uittrede</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>
      <View style={styles.footer}>
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity
            style={styles.footerButtonSmall}
            onPress={handlePreviousPage}
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
