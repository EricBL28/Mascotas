import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueLogin,
    alignItems:  'center',
    justifyContent: 'flex-end',
    flex: 1,
},
//PANTALLA DE LOGIN------------------------------------
fondoBlancoLog:{
    backgroundColor: Colors.white,
    borderRadius: 30,

},
tituloLogin:{
    fontSize: 35,
    marginTop: 10,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.white,
},
PetConnect:{
    textAlign: "center",
    fontSize: 55,
    fontFamily:'WendyOne',
    color: Colors.white,
},
textoAccede:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueText,
},
input: {
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    margin: 20,
    marginBottom: 15,
    backgroundColor: Colors.orangeInput,

},
boton:{
    width: 150,
    height: 100,
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    marginLeft: 200,
    borderRadius: 30,
    backgroundColor: Colors.orangeInput,
    fontFamily:'Poppins',

}

})
