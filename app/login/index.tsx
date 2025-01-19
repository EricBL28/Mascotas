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
          style={{width: 60, height:60, position:'relative', left:'77%'}}
        ></Image>
      </View>

      <Text style={GlobalStyles.tituloLogin}>Bienvenido a</Text>
      <Text style={GlobalStyles.PetConnect}>Petconnect</Text>

      <View style={GlobalStyles.fondoBlancoLog}>
        
        <Image 
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={GlobalStyles.perroGato}
        ></Image>

        <View style={{ flexDirection: 'column', flexWrap: 'wrap', bottom:50}}>

          <Image 
            source={require("../../assets/images/huellaNaranja.png")}
            style={GlobalStyles.pataNaranjaArriba}
          ></Image>
          <Text style= {GlobalStyles.textoAccede}>Accede al refugio</Text>
          <Image 
            source={require("../../assets/images/huellaNaranja.png")}
            style={GlobalStyles.pataNaranjaAbajo}
          ></Image>
            
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
        
        
  
      </View>

      <Text style ={GlobalStyles.olvidarContra}>¿Olvidaste la contraseña?</Text>
    </View>

  )
}

export default Login