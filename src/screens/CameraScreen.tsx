import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { TouchableOpacity, View, Text} from 'react-native';
import ImagePicker from '../../components/Photos/ImagePicker';
import React from 'react';
import { styles } from '../styles/GlobalStyles';
import { RouteProp } from '@react-navigation/native';

type CameraScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Sleutels'>;
  route: RouteProp<RootStackParamList, 'Camera'>;
};

export default function CameraScreen({ navigation, route }: CameraScreenProps) {
  const handleNextPage = () => {
    navigation.navigate('Sleutels', {
      ...route.params,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vision</Text>
      </View>
      <View style={styles.bodyHigher}>

        <ImagePicker onImagesSelected={(imageUris) => console.log(imageUris)} />

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