import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';
import { BotonAcceder } from '../../components/BotonAcceder';

const Login = () => {
  return (
    <View style = {GlobalStyles.contenedor}>

      <Text style={GlobalStyles.tituloLogin}>Bienvenido a</Text>
      <Text style={GlobalStyles.PetConnect}>Petconnect</Text>
      <View style={GlobalStyles.fondoBlancoLog}>
        <Text style= {GlobalStyles.textoAccede}>Accede al refugio</Text>
        
        <TextInput
          style={GlobalStyles.input}
          placeholder="Email"
        />
        <TextInput
          style={GlobalStyles.input}
          placeholder="Contraseña"
        />
          
        <BotonAcceder label='Acceder'></BotonAcceder>
          

        </View>
      <Text>¿Olvidaste la contraseña?</Text>
    </View>

  )
}

export default Login