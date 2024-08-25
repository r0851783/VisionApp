import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../src/styles/GlobalStyles';
import UnitTypeCheckboxForm from '../../components/Formulier/UnitTypeCheckbox';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';

type UnitTypeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Camera'>;
  route: RouteProp<RootStackParamList, 'UnitType'>;
};

export default function UnitTypeScreen({navigation, route}: UnitTypeScreenProps) {
  const [woningType, setWoningType] = useState<string>('');
  const [woningTypeError, setWoningTypeError] = useState<string>('');

  const validateAndProceed = (): boolean => {
    if (!woningType) {
      setWoningTypeError('Selecteer een type woning.');
      return false;
    } else {
      setWoningTypeError('');
      return true;
    }
  };

  const handleNextPage = () => {
    if (validateAndProceed()) {
      navigation.navigate('Camera', {
        ...route.params,
        woningType,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>

      <UnitTypeCheckboxForm
        woningType={woningType}
        setWoningType={setWoningType}
        woningTypeError={woningTypeError}
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
