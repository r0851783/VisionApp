import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';
import { styles } from '../styles/GlobalStyles';
import { getDBConnection, getPlaatsbeschrijvingen } from '../data/database';

type FotosScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Fotos'>;
};

export default function FotosScreen({ navigation }: FotosScreenProps) {
  const [imageUris, setImageUris] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Getting DB connection...');
        const db = await getDBConnection();
        console.log('DB connection established:', db);

        const plaatsbeschrijvingen = await getPlaatsbeschrijvingen(db);
        console.log('Fetched plaatsbeschrijvingen:', plaatsbeschrijvingen);

        if (plaatsbeschrijvingen && plaatsbeschrijvingen.length > 0) {
          const imageUriString = plaatsbeschrijvingen[0].imageUris;
          if (imageUriString) {
            const imageUrisArray = imageUriString.split(',').map((uri: string) => uri.trim());
            console.log('Image URIs:', imageUrisArray);
            setImageUris(imageUrisArray);
          } else {
            console.log('No image URIs found');
          }
        }
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
    <View style={styles.headerContainerSamenvatting}>
            <Text style={[styles.title, {top: 30}]}>Vision</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainerSamenvatting} style={{ flex: 1 }}>
          <View style={styles.summaryContainer}>
              {imageUris && imageUris.length > 0 ? (
                imageUris.map((uri, index) => (
                  <Image
                    key={index}
                    source={{ uri }}
                    style={{ width: '100%', height: 300, marginBottom: 20 }}
                    resizeMode="contain"
                  />
                ))
              ) : (
                <Text style={[styles.errorText, { marginBottom: 20, textAlign: 'center' }]}>Geen foto's gevonden</Text>
              )}
          </View>
        </ScrollView>
        <View style={[styles.footerButtonContainer, {width: '100%', paddingBottom: 20, justifyContent: 'center',}]}>
                <TouchableOpacity
                    style={[styles.footerButtonSmall, { width: '90%' }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.startButton}>Terug naar overzicht</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}
