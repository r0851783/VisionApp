import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';

type SamenvattingScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Handtekening'>;
    route: RouteProp<RootStackParamList, 'Samenvatting'>;
};

export default function SamenvattingScreen({ navigation, route }: SamenvattingScreenProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({
        selectedNames: route.params.selectedNames || [],
        selectedOption: route.params.selectedOption || '',
        intredeDatum: route.params.intredeDatum || '',
        uittredeDatum: route.params.uittredeDatum || '',
        verhuurderNaam: route.params.verhuurderNaam || '',
        verhuurderGeboortedatum: route.params.verhuurderGeboortedatum || '',
        verhuurderTelefoonnummer: route.params.verhuurderTelefoonnummer || '',
        verhuurderEmail: route.params.verhuurderEmail || '',
        huurderNaam: route.params.huurderNaam || '',
        huurderGeboortedatum: route.params.huurderGeboortedatum || '',
        huurderTelefoonnummer: route.params.huurderTelefoonnummer || '',
        huurderEmail: route.params.huurderEmail || '',
        straat: route.params.straat || '',
        huisnummer: route.params.huisnummer || '',
        busnummer: route.params.busnummer || '',
        postcode: route.params.postcode || '',
        stad: route.params.stad || '',
        woningType: route.params.woningType || '',
        voordeur: route.params.voordeur || '',
        garage: route.params.garage || '',
        brievenbus: route.params.brievenbus || '',
        text: route.params.text || '',
    });

    const handleNextPage = () => {
      navigation.navigate('Handtekening', data);
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (name: string, value: string) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    const renderEdit = (label: string, value: string, name: string) => {
        return (
            <View style={[styles.labelContainer, {marginLeft: 15, marginRight: 20}]}>
                <Text style={styles.label}>{label}</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.textInput}
                        value={value}
                        onChangeText={(text) => handleInputChange(name, text)}
                    />
                ) : (
                    <Text style={styles.value}>{value || '/'}</Text>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainerSamenvatting}>
                <Text style={[styles.title, {top: 30}]}>Vision</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainerSamenvatting} style={{ flex: 1 }}>
                <View style={styles.summaryContainer}>
                    {renderEdit('Werknemers', data.selectedNames.join(', '), 'selectedNames')}
                    <View style={styles.line} />
                    {renderEdit('Type Plaatsbeschrijving', data.selectedOption, 'selectedOption')}
                    <View style={styles.line} />
                    {renderEdit('Datum Intrede', data.intredeDatum, 'intredeDatum')}
                    {renderEdit('Datum Uittrede', data.uittredeDatum, 'uittredeDatum')}
                    <View style={styles.line} />
                    <Text style={[styles.label, styles.aquaTitle]}>Gegevens verhuurder</Text>
                    {renderEdit('Naam', data.verhuurderNaam, 'verhuurderNaam')}
                    {renderEdit('Geboortedatum', data.verhuurderGeboortedatum, 'verhuurderGeboortedatum')}
                    {renderEdit('Telefoonnnummer', data.verhuurderTelefoonnummer, 'verhuurderTelefoonnummer')}
                    {renderEdit('Email', data.verhuurderEmail, 'verhuurderEmail')}
                    <View style={styles.line} />
                    <Text style={[styles.label, styles.aquaTitle]}>Gegevens huurder</Text>
                    {renderEdit('Naam', data.huurderNaam, 'huurderNaam')}
                    {renderEdit('Geboortedatum', data.huurderGeboortedatum, 'huurderGeboortedatum')}
                    {renderEdit('Telefoonnummer', data.huurderTelefoonnummer, 'huurderTelefoonnummer')}
                    {renderEdit('Email', data.huurderEmail, 'huurderEmail')}
                    <View style={styles.line} />
                    {renderEdit('Straat', data.straat, 'straat')}
                    {renderEdit('Huisnummer', data.huisnummer, 'huisnummer')}
                    {renderEdit('Busnummer', data.busnummer, 'busnummer')}
                    {renderEdit('Postcode', data.postcode, 'postcode')}
                    {renderEdit('Stad', data.stad, 'stad')}
                    <View style={styles.line} />
                    {renderEdit('Type unit', data.woningType, 'woningType')}
                    <View style={styles.line} />
                    {renderEdit('Voordeur sleutels', data.voordeur, 'voordeur')}
                    {renderEdit('Garage sleutels', data.garage, 'garage')}
                    {renderEdit('Brievenbus sleutels', data.brievenbus, 'brievenbus')}
                    <View style={styles.line} />
                    {renderEdit('Opmerkingen', data.text, 'text')}
                </View>
                <TouchableOpacity 
                        onPress={toggleEditMode}
                    >
                        <Text style={{ color: '#4a4a4a', marginTop: 10, fontSize: 20, marginBottom: 15 }}>
                            {isEditing ? 'Opslaan' : 'Bewerken'}
                        </Text>
                    </TouchableOpacity>
                <View style={[styles.footerButtonContainer, {width: '90%', paddingBottom: 60}]}>
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