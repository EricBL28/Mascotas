import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueLogin,
    alignItems:  'center',
    flex: 1,
},
//PANTALLA DE LOGIN------------------------------------
fondoBlancoLog:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    marginTop: 55,
    flex: 1,
    width: '100%',
    
},
tituloLogin:{
    fontSize: 30,
    marginTop: 100,
    marginBottom:3,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.white,
},
PetConnect:{
    textAlign: "center",
    fontSize: 54,
    fontFamily:'WendyOne',
    color: Colors.white,
},
textoAccede:{
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueText,
},
input: {
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    margin: 15,
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
},
olvidarContra:{
    fontSize: 18,
    color: Colors.white,
    marginTop: 20,
    marginBottom: 25,
    fontFamily:'Poppins',

},
textRegistrar:{
    fontSize: 20,
    color: Colors.blueText,
    textAlign: "left", 
    marginLeft: 10,  
},
ContenedorbotonTexto:{
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Alinea verticalmente al centro
    flexWrap: 'wrap', // Permite que los elementos pasen a la siguiente línea si es necesario
    width: '100%', // Asegura que el contenedor no exceda el ancho de la pantalla
    marginTop: 20, // Espaciado superior
},
image:{
    width: 200,
},
gatitoImage:{
    width: 80,
    
},
})
