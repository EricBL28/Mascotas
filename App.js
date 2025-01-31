import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenPrincipal from './app/drawer/login/index';  // Asegúrate de tener esta pantalla
import ProfileScreen from './app/drawer/index';      // Esta pantalla es para ejemplo

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ScreenPrincipal">
        <Drawer.Screen name="Screen Principal" component={ScreenPrincipal} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
