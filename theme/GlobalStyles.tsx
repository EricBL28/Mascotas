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
    fontSize: 23,
    borderRadius: 30,
    backgroundColor: Colors.orangeInput,
    fontFamily:'Poppins',
},
botonNaranja:
{
    backgroundColor: Colors.orangeButton,
    color:Colors.blueText,
    textAlign:'center',
    padding: 10,
},
botonGris:
{
    backgroundColor: Colors.grey,
    color: Colors.white,
    borderBottomColor: Colors.white,
    width:'auto',
    borderWidth: 4,
    height:59,
    textAlign:'center',
    padding: 10,
    margin:10,
    marginBottom:30,
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
    top: 60,
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
    top:50,
},
contenedorGrisOscuro:{
    backgroundColor:Colors.greyDark,
    width: '100%',
    borderRadius: 30,
    position:'absolute',
    bottom:50,
}, 
textoUnirse:{
    color: Colors.white,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',

},
perroGatoReg:{
    width: 250, 
    height:210, 
    position:'absolute', 
    alignSelf:'center',    
    top: 150,
},
contenedorBotones:{
    flexDirection:'row',
    flexWrap: 'wrap',  
    columnGap: 60,
},
textoAccedeARefugio:{
    color:Colors.blueText, 
    bottom: 5, 
    fontSize: 20, 
    fontFamily:'Poppins',
    position: 'absolute'
},



})
