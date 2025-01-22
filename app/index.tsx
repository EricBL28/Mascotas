import { GlobalStyles } from "@/theme/GlobalStyles";
import React, { useState } from 'react';
import { Redirect } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === '123456') {
      Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${email}`);
    } else {
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
  };

  return (<View style={GlobalStyles.containerAzul}>

    <View>
      <Image source={require("../assets/images/logo02.png")} style={GlobalStyles.logo}>
      </Image>
      
    </View>


    <View style={GlobalStyles.containerBlanco}>

      <Text> INICIA SESION </Text>
    <TextInput style={GlobalStyles.textoCorreo} // Asegúrate de agregar estilos para este input en tu GlobalStyles
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={GlobalStyles.textoCorreo} // Mismo estilo para el segundo input
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={GlobalStyles.textoCorreo} onPress={handleLogin}>
        <Text style={GlobalStyles.buttonText}>Acceder</Text>
      </TouchableOpacity>
    </View>
  </View>);
}