import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { getDBConnection, getPlaatsbeschrijvingen } from '../data/database';

type plaatsbeschrijvingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
};

export default function PlaatsbeschrijvingScreen({ navigation }: plaatsbeschrijvingScreenProps) {
    const [plaatsbeschrijvingen, setPlaatsbeschrijvingen] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        const fetchPlaatsbeschrijvingen = async () => {
        try {
            const db = await getDBConnection();
            const fetchedPlaatsbeschrijvingen = await getPlaatsbeschrijvingen(db);
            setPlaatsbeschrijvingen(fetchedPlaatsbeschrijvingen);
        } catch (error) {
            console.error('Failed to fetch plaatsbeschrijvingen:', error);
        }
        };

        fetchPlaatsbeschrijvingen();
    }, []);

    const handleNextPage = () => {
        if (currentIndex < plaatsbeschrijvingen.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setTimeout(() => {
                scrollViewRef.current?.scrollTo({ y: 0, animated: true });
            }, 0); // Voeg een kleine vertraging toe
        }
    };

    const handlePreviousPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setTimeout(() => {
                scrollViewRef.current?.scrollTo({ y: 0, animated: true });
            }, 0); // Voeg een kleine vertraging toe
        }
    };

    const handleHome = () => {
        navigation.navigate('Home');
    };

    const renderEdit = (label: string, value: string) => {
        return (
            <View style={[styles.labelContainer, {marginLeft: 15, marginRight: 20}]}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.textInput}>{value}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainerSamenvatting}>
                <Text style={[styles.title, {top: 30}]}>Vision</Text>
            </View>
            <ScrollView 
                contentContainerStyle={styles.contentContainerSamenvatting} 
                style={{ flex: 1 }}
                ref={scrollViewRef} // Ref toevoegen aan ScrollView
            >
                {plaatsbeschrijvingen.length > 0 ? (
                <View style={styles.summaryContainer}>
                    {renderEdit('Werknemers', plaatsbeschrijvingen[currentIndex].selectedNames)}
                    <View style={styles.line} />
                    {renderEdit('Type Plaatsbeschrijving', plaatsbeschrijvingen[currentIndex].selectedOption)}
                    <View style={styles.line} />
                    {renderEdit('Datum Intrede', plaatsbeschrijvingen[currentIndex].intredeDatum)}
                    {renderEdit('Datum Uittrede', plaatsbeschrijvingen[currentIndex].uittredeDatum)}
                    <View style={styles.line} />
                    <Text style={[styles.label, styles.aquaTitle]}>Gegevens verhuurder</Text>
                    {renderEdit('Naam', plaatsbeschrijvingen[currentIndex].verhuurderNaam)}
                    {renderEdit('Geboortedatum', plaatsbeschrijvingen[currentIndex].verhuurderGeboortedatum)}
                    {renderEdit('Telefoonnummer', plaatsbeschrijvingen[currentIndex].verhuurderTelefoonnummer)}
                    {renderEdit('Email', plaatsbeschrijvingen[currentIndex].verhuurderEmail)}
                    <View style={styles.line} />
                    <Text style={[styles.label, styles.aquaTitle]}>Gegevens huurder</Text>
                    {renderEdit('Naam', plaatsbeschrijvingen[currentIndex].huurderNaam)}
                    {renderEdit('Geboortedatum', plaatsbeschrijvingen[currentIndex].huurderGeboortedatum)}
                    {renderEdit('Telefoonnummer', plaatsbeschrijvingen[currentIndex].huurderTelefoonnummer)}
                    {renderEdit('Email', plaatsbeschrijvingen[currentIndex].huurderEmail)}
                    <View style={styles.line} />
                    {renderEdit('Straat', plaatsbeschrijvingen[currentIndex].straat)}
                    {renderEdit('Huisnummer', plaatsbeschrijvingen[currentIndex].huisnummer)}
                    {renderEdit('Busnummer', plaatsbeschrijvingen[currentIndex].busnummer)}
                    {renderEdit('Postcode', plaatsbeschrijvingen[currentIndex].postcode)}
                    {renderEdit('Stad', plaatsbeschrijvingen[currentIndex].stad)}
                    <View style={styles.line} />
                    {renderEdit('Type unit', plaatsbeschrijvingen[currentIndex].woningType)}
                    <View style={styles.line} />
                    {renderEdit('Voordeur sleutels', plaatsbeschrijvingen[currentIndex].voordeur)}
                    {renderEdit('Brievenbus sleutels', plaatsbeschrijvingen[currentIndex].brievenbus)}
                    {renderEdit('Garage sleutels', plaatsbeschrijvingen[currentIndex].garage)}
                    <View style={styles.line} />
                    {renderEdit('Opmerkingen', plaatsbeschrijvingen[currentIndex].text)}
                </View>
                ) : (
                <Text style={styles.errorText}>Geen plaatsbeschrijvingen gevonden</Text>
                )}
                <View style={[styles.footerButtonContainer, {width: '90%', paddingBottom: 20}]}>
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
                <View style={[styles.footerButtonContainer, {width: '90%', paddingBottom: 20}]}>
                    <TouchableOpacity
                        style={[styles.footerButtonSmall, { width: '100%' }]}
                        onPress={handleHome}
                    >
                        <Text style={styles.startButton}>Home</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
