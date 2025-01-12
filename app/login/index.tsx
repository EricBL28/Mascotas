import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';

const Login = () => {
  return (
    <View style = {GlobalStyles.contenedor}>
        <Text style={GlobalStyles.tituloLogin}>Bienvenido a</Text>
        <Text style={GlobalStyles.PetConnect}>Petconnect</Text>
        <View style={GlobalStyles.fondoBlancoLog}>
            <Text>Accede al refugio</Text>
            <TextInput
            style={GlobalStyles.input}
            placeholder="Email"
            />
            <TextInput
            style={GlobalStyles.input}
            placeholder="Contraseña"
            />
        </View>

    </View>

  )
}

export default Login