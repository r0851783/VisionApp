import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../src/styles/GlobalStyles';
import Checkbox from 'expo-checkbox';

type SleutelFormProps = {
  label: string;
  quantity: string;
  setQuantity: (quantity: string) => void;
  notApplicable: boolean;
  setNotApplicable: (value: boolean) => void;
  errorMessage: string;
};

export default function SleutelForm({
  label,
  quantity,
  setQuantity,
  notApplicable,
  setNotApplicable,
  errorMessage,
}: SleutelFormProps) {

  const handleCheckboxChange = (value: boolean) => {
    setNotApplicable(value);
    if (value) {
      setQuantity('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 10 }}>
          <Text style={[styles.nameButtonText, { flex: 1 }]}>{label}</Text>
          <TextInput
            style={[
              styles.nameButton,
              { flex: 2, backgroundColor: notApplicable ? '#f8d7da' : '#ffffff' }
            ]}
            placeholder='Aantal'
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            editable={!notApplicable}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginLeft: 118 }}>
          <Checkbox
            value={notApplicable}
            onValueChange={handleCheckboxChange}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={styles.nameButtonText}>Niet van toepassing</Text>
        </View>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
