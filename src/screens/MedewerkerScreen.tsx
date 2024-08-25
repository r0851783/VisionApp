import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/GlobalStyles';

type MedewerkerScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
};

export default function MedewerkerScreen({ navigation }: MedewerkerScreenProps) {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const toggleNameSelection = (name: string) => {
      if (selectedNames.includes(name)) {
        setSelectedNames(selectedNames.filter(selectedName => selectedName !== name));
      } else {
        setSelectedNames([...selectedNames, name]);
      }
      setErrorMessage('');
    };

    const handleNextPage = () => {
        if (selectedNames.length === 0) {
            setErrorMessage('Selecteer minstens één werknemer.');
        } else {
            navigation.navigate('Selectie', { selectedNames });
        }
    };

    return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <View style={styles.bodyHigher}>
      <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15 }]}>Selecteer werknemers</Text>
        {['Henk', 'Adri','Sébastiaan', 'Tuur'].map((name, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.nameButton,
              selectedNames.includes(name) && styles.nameButtonSelected
            ]}
            onPress={() => toggleNameSelection(name)}
          >
            <Text style={styles.nameButtonText}>{name}</Text>
          </TouchableOpacity>
        ))}
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