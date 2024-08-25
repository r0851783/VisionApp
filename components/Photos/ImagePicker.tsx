import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

type ImagePickerComponentProps = {
  onImagesSelected?: (imageUris: string[]) => void;
};

export default function ImagePicker({ onImagesSelected }: ImagePickerComponentProps) {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        const newUri = response.assets[0].uri;
        if (newUri) {
          const updatedUris = [...imageUris, newUri];
          setImageUris(updatedUris);
          if (onImagesSelected) {
            onImagesSelected(updatedUris);
          }
        }
      }
    });
  };

  const handleGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        const newUri = response.assets[0].uri;
        if (newUri) {
          const updatedUris = [...imageUris, newUri];
          setImageUris(updatedUris);
          if (onImagesSelected) {
            onImagesSelected(updatedUris);
          }
        }
      }
    });
  };

  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Neem foto" onPress={handleCamera} />
        <Button title="Kies foto" onPress={handleGallery} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        {imageUris.map((uri, index) => (
          <Image
            key={index}
            source={{ uri: uri }}
            style={{ width: 300, height: 300, marginBottom: 15 }}
            resizeMode="contain"
          />
        ))}
      </View>
    </View>
  );
}
