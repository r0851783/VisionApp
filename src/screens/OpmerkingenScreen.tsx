import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/GlobalStyles';

type OpmerkingenScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Samenvatting'>;
    route: RouteProp<RootStackParamList, 'Opmerkingen'>;
};

export default function OpmerkingenScreen({ navigation, route }: OpmerkingenScreenProps) {
    const [text, setText] = useState('');
    
    const handleNextPage = () => {
      navigation.navigate('Samenvatting', {
        ...route.params,
        text,
      });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Vision</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.bodyHigher}>
                <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 15}]}>Opmerkingen</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Opmerking..."
                    value={text}
                    onChangeText={setText}
                    multiline={true}
                    numberOfLines={10}
                    onPress={Keyboard.dismiss}
                    />
            </View>
            </TouchableWithoutFeedback>
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