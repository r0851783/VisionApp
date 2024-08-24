import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../../src/styles/GlobalStyles';

type UnitBeschrijvingFormProps = {
  straat: string;
  setStraat: (text: string) => void;
  straatError: string;

  huisnummer: string;
  setHuisnummer: (text: string) => void;
  huisnummerError: string;

  busnummer: string;
  setBusnummer: (text: string) => void;

  postcode: string;
  setPostcode: (text: string) => void;
  postcodeError: string;

  stad: string;
  setStad: (text: string) => void;
  stadError: string;
};

export default function UnitBeschrijvingForm({
  straat, setStraat, straatError,
  huisnummer, setHuisnummer, huisnummerError,
  busnummer, setBusnummer,
  postcode, setPostcode, postcodeError,
  stad, setStad, stadError,
}: UnitBeschrijvingFormProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.bodyHigher}>
        <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 5 }]}>Unit beschrijving</Text>
        <TextInput
          style={styles.nameButton}
          placeholder="Straat"
          value={straat}
          onChangeText={setStraat}
        />
        {straatError ? <Text style={styles.errorText}>{straatError}</Text> : null}

        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <TextInput
              value={huisnummer}
              onChangeText={setHuisnummer}
              style={styles.nameButton}
              placeholder="Huisnummer"
            />
          </View>
          <View style={styles.halfInputContainer}>
            <TextInput
              value={busnummer}
              onChangeText={setBusnummer}
              style={[styles.nameButton, {width: '94%'}]}
              placeholder="Busnummer"
            />
          </View>
        </View>
        {huisnummerError ? <Text style={[styles.errorText, {marginLeft: 15}]}>{huisnummerError}</Text> : null}

        <TextInput
          style={[styles.nameButton]}
          placeholder="Postcode"
          value={postcode}
          onChangeText={setPostcode}
        />
        {postcodeError ? <Text style={styles.errorText}>{postcodeError}</Text> : null}

        <TextInput
          style={[styles.nameButton]}
          placeholder="Stad"
          value={stad}
          onChangeText={setStad}
        />
        {stadError ? <Text style={styles.errorText}>{stadError}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
