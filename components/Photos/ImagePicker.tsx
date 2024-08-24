import React, { useState } from "react";
import { View, Button, Image, ScrollView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

type ImagePickerComponentProps = {
  onImagesSelected?: (imageUris: string[]) => void;
};

export default function ImagePicker({  }: ImagePickerComponentProps) {
  const [imageUris] = useState<string[]>([]);

  const handleCamera = () => {
  launchCamera(
    {
      mediaType: 'photo',
      saveToPhotos: true,
    },
    (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        console.log('uri:', response.assets[0].uri);
      }
    }
  );
};

const handleGallery = () => {
  launchImageLibrary(
    {
      mediaType: 'photo',
    },
    (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        console.log('uri:', response.assets[0].uri);
      }
    }
  );
};

  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Neem foto" onPress={handleCamera} />
        <Button title="Kies foto" onPress={handleGallery} />
      </View>

      <ScrollView style={{ marginTop: 20 }}>
        {imageUris.map((uri, index) => (
          <Image
            key={index}
            source={{ uri: uri }}
            style={{ width: '100%', height: 200, marginBottom: 10 }}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </View>
  );
}
