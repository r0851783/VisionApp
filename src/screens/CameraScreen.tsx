import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import ImagePicker from '../../components/Photos/ImagePicker';
import React, { useState } from 'react';
import { styles } from '../styles/GlobalStyles';
import { RouteProp } from '@react-navigation/native';

type CameraScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Sleutels'>;
  route: RouteProp<RootStackParamList, 'Camera'>;
};

export default function CameraScreen({ navigation, route }: CameraScreenProps) {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleNextPage = () => {
    navigation.navigate('Sleutels', {
      ...route.params,
      imageUris: imageUris,
    });
  };

  const handleImagesSelected = (selectedImageUris: string[]) => {
    setImageUris(selectedImageUris);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainerSamenvatting}>
        <Text style={[styles.title, {top: 30}]}>Vision</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainerSamenvatting} style={{ flex: 1 }}>
        <View style={styles.summaryContainer}>
          <ImagePicker onImagesSelected={handleImagesSelected} />
        </View>
        <View style={[styles.footerButtonContainer, {width: '90%', marginTop: 20}]}>
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
      </ScrollView>
    </View>
  );
}