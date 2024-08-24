import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
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

  editable: boolean;
  setEditable: (editable: boolean) => void;
};

export default function PartijenVerhuurderForm({
  naam, setNaam, naamError,
  geboortedatum, setGeboortedatum, geboortedatumError,
  telefoonnummer, setTelefoonnummer, telefoonnummerError,
  email, setEmail, emailError, editable, setEditable
}: PartijenFormProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20 }]}>Gegevens verhuurder</Text>

        <TextInput
          style={styles.nameButton}
          placeholder="Naam + Voornaam"
          value={naam}
          onChangeText={setNaam}
          editable={editable}
        />
        {naamError ? <Text style={styles.errorText}>{naamError}</Text> : null}

        <TextInput
          style={styles.nameButton}
          placeholder="Geboortedatum (DD-MM-YYYY)"
          value={geboortedatum}
          onChangeText={setGeboortedatum}
          keyboardType="default"
          editable={editable}
        />
        {geboortedatumError ? <Text style={styles.errorText}>{geboortedatumError}</Text> : null}

        <TextInput
          style={styles.nameButton}
          placeholder="Telefoonnummer"
          value={telefoonnummer}
          onChangeText={setTelefoonnummer}
          keyboardType="phone-pad"
          editable={editable}
        />
        {telefoonnummerError ? <Text style={styles.errorText}>{telefoonnummerError}</Text> : null}

        <TextInput
          style={styles.nameButton}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          editable={editable}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TouchableOpacity onPress={() => setEditable(!editable)}>
          <Text style={{ color: '#4a4a4a', marginTop: 10, fontSize: 16 }}>
            {editable ? 'Opslaan' : 'Gegevens bewerken'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
