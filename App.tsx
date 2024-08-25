import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MedewerkerScreen from './src/screens/MedewerkerScreen';
import SelectieScreen from './src/screens/SelectieScreen';
import DataScreen from './src/screens/DataScreen';
import PartijenVerhuurderScreen from './src/screens/PartijenVerhuurderScreen';
import PartijenHuurderScreen from './src/screens/PartijenHuurderScreen';
import UnitBeschrijving from './src/screens/UnitBeschrijvingScreen';
import UnitType from './src/screens/UnitTypeScreen';
import Camera from './src/screens/CameraScreen';
import Sleutels from './src/screens/SleutelsScreen';
import Opmerkingen from './src/screens/OpmerkingenScreen';
import Samenvatting from './src/screens/SamenvattingScreen';
import Handtekening from './src/screens/HandtekeningScreen';
import Bevestiging from './src/screens/BevestigingScreen';
import Plaatsbeschrijving from './src/screens/PlaatsbeschrijvingScreen';
import Fotos from './src/screens/FotoScreen';
import { RootStackParamList } from './types';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Medewerker" component={MedewerkerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Plaatsbeschrijving" component={Plaatsbeschrijving} options={{ headerShown: false }} />
        <Stack.Screen name="Fotos" component={Fotos} options={{ headerShown: false }} />
        <Stack.Screen name="Selectie" component={SelectieScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Data" component={DataScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PartijenVerhuurder" component={PartijenVerhuurderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PartijenHuurder" component={PartijenHuurderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UnitBeschrijving" component={UnitBeschrijving} options={{ headerShown: false }} />
        <Stack.Screen name="UnitType" component={UnitType} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name="Sleutels" component={Sleutels} options={{ headerShown: false }} />
        <Stack.Screen name="Opmerkingen" component={Opmerkingen} options={{ headerShown: false }} />
        <Stack.Screen name="Samenvatting" component={Samenvatting} options={{ headerShown: false }} />
        <Stack.Screen name="Handtekening" component={Handtekening} options={{ headerShown: false }} />
        <Stack.Screen name="Bevestiging" component={Bevestiging} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
