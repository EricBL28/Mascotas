import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueDark,
    alignItems:  'center',
    flex: 1,
},
contenedorRegistro:{
    backgroundColor: Colors.white,
    alignItems:  'center',
    flex: 1,
    flexDirection: 'column',
},
//botones -------------------------------------------
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
botonNaranja:
{
    color: Colors.orangeButton,
},
botonGris:
{
    color: Colors.grey
},
//PANTALLA DE LOGIN------------------------------------
fondoBlancoLog:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    flex: 1,
    width: '100%',
    top:50,
    marginBottom:59,
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
    fontSize: 50,
    fontFamily:'WendyOne',
    color: Colors.white,
},
perroGato:{
    width: 250, 
    height:210, 
    position:'relative', 
    left:69, 
    top:-47, 
    backgroundColor:'red',
    marginBottom: 0,
    paddingBottom: 0,
}
,
textoAccede:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueText,
    backgroundColor: Colors.orangeInput,

},
input: {
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    margin: 10,
    marginBottom: 15,
    backgroundColor: Colors.orangeInput,
},
olvidarContra:{
    fontSize: 18,
    color: Colors.white,
    marginBottom: 25,
    fontFamily:'Poppins',
    textDecorationLine:"underline"

},
textRegistrar:{
    fontSize: 20,
    color: Colors.blueText,
    textAlign: "left", 
    marginLeft: 10,  
    textDecorationLine:"underline"

},
ContenedorbotonTexto:{
    flexDirection: 'row', 
    flexWrap: 'wrap',
    width: '100%', 
},
pataNaranjaArriba:{
    width: 40,
    height:40,
    alignSelf:'flex-start',
    marginLeft: 14,
},
pataNaranjaAbajo:{
    width: 40,
    height:40,
    alignSelf:'flex-end',
    marginRight: 14,
},
//PANTALLA DE Registro------------------------------------
tituloRegistro:{
    fontSize: 30,
    marginTop: 100,
    marginBottom:3,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueDark,
},
PetConnectRegistro:{
    textAlign: "center",
    fontSize: 50,
    fontFamily:'WendyOne',
    color: Colors.blueDark,
    marginBottom: 20,
},
contenedorNegro:{
    backgroundColor:Colors.black,
    width: '100%',
    borderRadius: 30,
    position:'fixed',
}, 
textoUnirse:{
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',

}




})
