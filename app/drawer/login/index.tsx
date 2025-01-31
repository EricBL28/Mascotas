import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from "@/theme/GlobalStyles";


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // 📌 Hook para navegar

  

  return (
    <View style={GlobalStyles.containerAzul}>
      <View style={GlobalStyles.header}>
        <Text style={GlobalStyles.Titulo}>PetConnect</Text>
        <Image source={require("../../../assets/images/logo02.png")} style={GlobalStyles.logo} />
      </View>

      <View style={GlobalStyles.containerBlanco}>
        <Image source={require("../../../assets/images/gatito.png")} style={GlobalStyles.GatitoPerrito} />
        <Text style={GlobalStyles.textoInicioSesion}> INICIA SESIÓN </Text>

        <TextInput 
          style={GlobalStyles.textoCorreo} 
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={GlobalStyles.textoCorreo} 
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={GlobalStyles.textoCorreo}>
          <Text style={GlobalStyles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
