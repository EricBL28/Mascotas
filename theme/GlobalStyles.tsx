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
pataNaranjaDerecha:{
    width: 40,
    height:40,
    backgroundColor:'red',
    
},
pataNaranjaIzq:{
    width: 40,
    height:40,
    backgroundColor:'red',
    top:1
},
})
