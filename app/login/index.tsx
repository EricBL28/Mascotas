import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';
import { Boton } from '../../components/Boton';
import { router } from "expo-router";
import { ScrollView } from 'react-native-gesture-handler';


const login = () => {
  return (
    <ScrollView contentContainerStyle={GlobalStyles.contenedor}>
      <View style={GlobalStyles.header}>
        <Text style={GlobalStyles.Titulo}>PetConnect</Text>
        <Image source={require("../../assets/images/logo_1.png")} style={GlobalStyles.logoLogin} />
      </View>

      <View style={GlobalStyles.fondoBlancoLog}>

        <Image
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={GlobalStyles.perroGato}
        ></Image>

        <View style={{ flexDirection: 'column', alignItems: 'center', bottom: 50 }}>

          <Text style={GlobalStyles.textoAccede}>Inicia Sesion</Text>

          <TextInput
            style={GlobalStyles.input}
            placeholder="Correo electronico"
          />

          <TextInput
            style={GlobalStyles.input}
            placeholder="Contraseña"
          />
          <Text style={GlobalStyles.olvidarContra}>Recuperar_contraseña</Text>

          
          <Image
            source={require("../../assets/images/huellaNaranja.png")}
            style={GlobalStyles.pataArriba}
          ></Image>
          <Boton label='Acceder' width={150} backgroundColor='naranja' link='../drawer'></Boton>
          <Image
            source={require("../../assets/images/huellaNaranja.png")}
            style={GlobalStyles.pataArriba}
          ></Image>
          <Boton label='Registrarse' width={150} backgroundColor='naranja' link='../signUp'></Boton>
          



        </View>



      </View>


    </ScrollView>

  )
}

export default login