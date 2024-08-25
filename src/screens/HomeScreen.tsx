import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleNextPage = () => {
          navigation.navigate('Medewerker');
  };

  const handlePlaatsbeschrijvingen = async () => {
    navigation.navigate('Plaatsbeschrijving');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15 }]}>Welkom op de plaatsbeschrijving!</Text>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 300, height: 300}}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, {marginBottom: 10}]}
          onPress={handleNextPage}
        >
          <Text style={styles.startButton}>Start plaatsbeschrijving</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, {marginBottom: 10}]}
          onPress={handlePlaatsbeschrijvingen}
        >
          <Text style={styles.startButton}>Plaatsbeschrijvingen opvragen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}