import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text } from 'react-native';
import { styles } from '../../src/styles/GlobalStyles';

type UnitTypeCheckboxFormProps = {
  woningType: string;
  setWoningType: (itemValue: string) => void;
  woningTypeError: string;
};

export default function UnitTypeCheckboxForm({
  woningType,
  setWoningType,
  woningTypeError,
}: UnitTypeCheckboxFormProps) {
  const [open, setOpen] = useState(false);
  const [items] = useState([
    { label: 'Studentenkot', value: 'studentenkot' },
    { label: 'Studio', value: 'studio' },
    { label: 'Appartement', value: 'appartement' },
    { label: 'Huis', value: 'huis' },
    { label: 'Garage', value: 'garage' },
  ]);

  return (
    <View style={styles.bodyHigher}>
      <Text style={[styles.nameButtonText, { fontWeight: 'bold', fontSize: 20, marginBottom: 5}]}>Selecteer type woning</Text>
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={woningType}
        items={items}
        setOpen={setOpen}
        setValue={setWoningType as any}
        setItems={() => {}}
        placeholder="Selecteer type woning"
        dropDownContainerStyle={styles.dropDownContainer}
        zIndex={1000}
        listMode="SCROLLVIEW"
      />
      {woningTypeError ? <Text style={styles.errorText}>{woningTypeError}</Text> : null}
    </View>
  );
}
