import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';
import { styles } from '../styles/GlobalStyles';

type FotosScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Fotos'>;
};

export default function FotosScreen({ navigation, route }: FotosScreenProps) {
  const { imageUris } = route.params;

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
