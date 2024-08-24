import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../src/styles/GlobalStyles';

type PartijenFormProps = {
  naam: string;
  setNaam: (text: string) => void;
  naamError: string;

  geboortedatum: string;
  setGeboortedatum: (text: string) => void;
  geboortedatumError: string;

  telefoonnummer: string;
  setTelefoonnummer: (text: string) => void;
  telefoonnummerError: string;

  email: string;
  setEmail: (text: string) => void;
  emailError: string;
};

export default function PartijenHuurderForm({
  naam, setNaam, naamError,
  geboortedatum, setGeboortedatum, geboortedatumError,
  telefoonnummer, setTelefoonnummer, telefoonnummerError,
  email, setEmail, emailError
}: PartijenFormProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20 }]}>Gegevens huurder</Text>
        <TextInput
          style={styles.nameButton}
          placeholder="Naam + Voornaam"
          value={naam}
          onChangeText={setNaam}
        />
        {naamError ? <Text style={styles.errorText}>{naamError}</Text> : null}

        <TextInput
          style={styles.nameButton}
          placeholder="Geboortedatum (DD-MM-YYYY)"
          value={geboortedatum}
          onChangeText={setGeboortedatum}
          keyboardType="default"
        />
        {geboortedatumError ? <Text style={styles.errorText}>{geboortedatumError}</Text> : null}

        <TextInput
          style={styles.nameButton}
          placeholder="Telefoonnummer"
          value={telefoonnummer}
          onChangeText={setTelefoonnummer}
          keyboardType="phone-pad"
        />
        {telefoonnummerError ? <Text style={styles.errorText}>{telefoonnummerError}</Text> : null}

        <TextInput
          style={styles.nameButton}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
