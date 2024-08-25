import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { styles } from '../styles/GlobalStyles';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const users = [
    { user: 'Admin', password: 'admin1' },
    { user: 'Henk', password: 'henk1' },
    { user: 'Adri', password: 'adri1' },
    { user: 'Sébastiaan', password: 'sébastiaan1' },
    { user: 'Tuur', password: 'tuur1' },
  ];

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Gebruikersnaam en wachtwoord zijn verplicht.');
      return;
    }

    const user = users.find(u => u.user === username && u.password === password);
    if (user) {
      setErrorMessage('');
      navigation.navigate('Home');
    } else {
      setErrorMessage('De gebruikersnaam of wachtwoord is onjuist. Probeer het opnieuw.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Vision</Text>
            </View>
            <View style={styles.bodyHigher}>
                <TextInput
                    style={styles.nameButton}
                    placeholder="Gebruikersnaam"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.nameButton}
                    placeholder="Wachtwoord"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            {errorMessage ? (
            <Text style={{ color: 'red', marginBottom: 15 }}>{errorMessage}</Text>
          ) : null}
            <View style={[styles.footer, {justifyContent: 'center', alignItems: 'center'}]}>
                <View style={[styles.footerButtonContainer, {justifyContent: 'center', alignItems: 'center'}]}>
                    <TouchableOpacity style={styles.footerButtonSmall} onPress={handleLogin}>
                        <Text style={styles.nameButtonText}>Inloggen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}
