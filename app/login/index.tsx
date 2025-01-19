import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';
import { Boton } from '../components/Boton';

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
          <View style={{flexDirection: 'row',flexWrap: 'wrap', width: '100%', position:'absolute'}}>
              <Text style={GlobalStyles.textRegistrar}>Regístrate aquí</Text>
              <Boton label='Acceder' width={150} color='naranja' style={{position:'relative', marginBottom:20}}></Boton>
          </View>


        </View>
        
        
  
      </View>

      <Text style ={GlobalStyles.olvidarContra}>¿Olvidaste la contraseña?</Text>
    </View>

  )
}

export default Login