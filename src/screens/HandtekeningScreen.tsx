import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Signature from 'react-native-signature-canvas';
import { styles } from '../styles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';
import { createTable, getDBConnection, insertPlaatsbeschrijving } from '../data/database';

type HandtekeningScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Bevestiging'>;
    route: RouteProp<RootStackParamList, 'Handtekening'>;
};

export default function HandtekeningScreen({ navigation, route }: HandtekeningScreenProps) {
    const {
        selectedNames,
        selectedOption,
        intredeDatum,
        uittredeDatum,
        verhuurderNaam,
        verhuurderGeboortedatum,
        verhuurderTelefoonnummer,
        verhuurderEmail,
        huurderNaam,
        huurderGeboortedatum,
        huurderTelefoonnummer,
        huurderEmail,
        straat,
        huisnummer,
        busnummer,
        postcode,
        stad,
        woningType,
        imageUris,
        voordeur,
        garage,
        brievenbus,
        text,
    } = route.params || {};

    const signatureVerhuurderRef = useRef(null);
    const signatureHuurderRef = useRef(null);

    const handleSignature = (signature: string) => {
        console.log(signature);
    };

    const clearSignature = (ref: any) => {
        ref.current.clearSignature();
    };

    const handleSaveData = async () => {
        try {
            const db = await getDBConnection();
            await createTable(db);
            const data = {
                selectedNames,
                selectedOption,
                intredeDatum,
                uittredeDatum,
                verhuurderNaam,
                verhuurderGeboortedatum,
                verhuurderTelefoonnummer,
                verhuurderEmail,
                huurderNaam,
                huurderGeboortedatum,
                huurderTelefoonnummer,
                huurderEmail,
                straat,
                huisnummer,
                busnummer,
                postcode,
                stad,
                woningType,
                imageUris: imageUris ? imageUris.join(', ') : '',
                voordeur,
                garage,
                brievenbus,
                text,
            };
            console.log('Saving data with imageUris:', data.imageUris);
            await insertPlaatsbeschrijving(db, data);
            console.log('Data and signatures saved successfully');
            handleNextPage();
        } catch (error) {
            console.error('Failed to save data', error);
        }
    };

    const handleNextPage = () => {
        navigation.navigate('Bevestiging', {
            ...route.params,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Handtekening</Text>
            </View>
            <View style={styles.bodyHigher}>
                <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15 }]}>Verhuurder</Text>
                    <Signature
                        ref={signatureVerhuurderRef}
                        onOK={handleSignature}
                        onEmpty={() => ('Gelieve uw handtekening te zetten')}
                        descriptionText="Onderteken hieronder"
                        clearText="Herstellen"
                        confirmText="Bevestigen"
                        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
                        autoClear={true}
                        style={{marginBottom: 15, borderWidth: 1, borderColor: 'red', marginLeft: 10, marginRight: 10}}
                    />
                    <TouchableOpacity 
                        onPress={() => clearSignature(signatureVerhuurderRef)}
                    >
                        <Text>Herstellen</Text>
                    </TouchableOpacity>
                    <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15, marginTop: 15 }]}>Huurder</Text>
                    <Signature
                        ref={signatureHuurderRef}
                        onOK={handleSignature}
                        onEmpty={() => ('Gelieve uw handtekening te zetten')}
                        descriptionText="Onderteken hieronder"
                        clearText="Herstellen"
                        confirmText="Bevestigen"
                        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
                        autoClear={true}
                        style={{marginBottom: 15, borderWidth: 1, borderColor: 'red', marginLeft: 10, marginRight: 10}}
                    />
                    <TouchableOpacity
                        onPress={() => clearSignature(signatureHuurderRef)}
                    >
                        <Text>Herstellen</Text>
                    </TouchableOpacity>
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
                        onPress={handleSaveData}
                    >
                        <Text style={styles.startButton}>Opslaan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
