import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';
import { BotonAcceder } from '../../components/BotonAcceder';

const Login = () => {
  return (
    <View style = {GlobalStyles.contenedor}>
      <View style={{height:100, width:'100%' , position:'absolute', top:13}}>
        <Image 
          source={require("../../assets/images/logo_2.png")}
          style={{width: 80, height:80, position:'relative', left:'77%'}}
        ></Image>
      </View>

      <Text style={GlobalStyles.tituloLogin}>Bienvenido a</Text>
      <Text style={GlobalStyles.PetConnect}>Petconnect</Text>

      <View style={GlobalStyles.fondoBlancoLog}>
        
 
        <Image 
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={{width: 200, height:200, backgroundColor:'red', position:'relative'}}
        ></Image>


        <Text style= {GlobalStyles.textoAccede}>Accede al refugio</Text>
          
          <TextInput
            style={GlobalStyles.input}
            placeholder="Email"
          />

        <TextInput
          style={GlobalStyles.input}
          placeholder="Contraseña"
        />
        <View style={GlobalStyles.ContenedorbotonTexto}>
            <Text style={GlobalStyles.textRegistrar}>Regístrate aquí</Text>
            <BotonAcceder label='Acceder'></BotonAcceder>
        </View>
        
  
      </View>
      <Text style ={GlobalStyles.olvidarContra}>¿Olvidaste la contraseña?</Text>
    </View>

  )
}

export default Login