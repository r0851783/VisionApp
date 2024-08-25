import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';

type BevestigingScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Bevestiging'>;
    route: RouteProp<RootStackParamList, 'Bevestiging'>;
};

export default function BevestigingScreen({ navigation}: BevestigingScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Vision</Text>
            </View>
            <View style={styles.bodyHigher}>
                <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 5 }]}></Text>
                <Text style={styles.nameButtonText}>
                    De plaatsbeschrijving is succesvol ingestuurd!
                </Text>
                <Image
                    source={require('../../assets/succesvol.png')}
                    style={{ width: 100, height: 100, marginTop: 30 }}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footerButtonSmall}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.startButton}>Terug naar Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
