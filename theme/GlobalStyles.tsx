import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { reloadAppAsync } from "expo";

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueDark,
    alignItems:  'center',
    justifyContent:'center',
    flex: 1,
},
contenedorRegistro:{
    backgroundColor: Colors.blueDark,
    alignItems:  'center',
    flex: 1,
    flexDirection: 'column',
},
//Drawer-----------------------------------------------------------------
drawerUserContainer: {
    backgroundColor: 'indigo',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginBottom: 30,
    height: 140,
    borderRadius: 10,

},
headerDrawer: {
    backgroundColor:Colors.blueDark,
},
drawerUserImg: {
    width: 100, 
    height: 100, 
    alignSelf:'center', 
    borderRadius: 50
},
//botones -------------------------------------------
boton:{
    width: 125,
    height: 100,
    textAlign: 'center',
    padding: 0,
    fontSize: 17,
    borderRadius: 30,
    backgroundColor: Colors.orangeInput,
    opacity:0.7,
    fontFamily:'MoreSugar-Thin',
    fontWeight:'bold',
},
botonNaranja:
{
    marginTop:-15,
    backgroundColor: Colors.orangeButton,
    color:Colors.blueText,
    textAlign:'center',
    padding: 15,
    width:'auto',
    height: 59,
},
botonGris:
{
    backgroundColor: Colors.grey,
    color: Colors.white,
    borderBottomColor: Colors.white,
    width:'auto',
    borderWidth: 4,
    height: 59 ,
    textAlign:'center',
    padding: 10,
    margin:10,
    marginBottom:30,
},
//PANTALLA DE LOGIN------------------------------------
logoLogin: {
    width: 100,
    height: 100,
    left:-20,
    resizeMode: "contain",
    marginLeft: 45,
},
header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
},
Titulo: {
    fontSize: 35,
    right:-25,
    fontWeight: "bold",
    fontFamily:"MoreSugar",
    color: Colors.white,
},
containerblueLight: {
    backgroundColor: Colors.blueLight,
    height: "100%",
},
fondoBlancoLog: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    backgroundColor: Colors.white,
    padding: 20,
    width:"100%",
    marginBottom: 50,
    position: "relative",
},
tituloLogin: {
    fontSize: 29,
    marginTop: 100,
    marginBottom: 3,
    textAlign: "center",
    fontFamily: 'MoreSugar',
    color: Colors.white,
},
PetConnect: {
    textAlign: "center",
    fontSize: 49,
    fontFamily: 'WendyOne',
    color: Colors.white,
},
perroGato: {
    width: 240,
    height: 240,
    marginBottom:30,
    resizeMode: "contain",
    marginTop: -80, 
},
textoAccede: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily: 'MoreSugar',
    marginTop:20,
    marginBottom:20,
    color: Colors.blueText, 
},
input: {
    borderRadius: 30,
    padding: 15,
    fontSize: 20,
    width:350,
    margin: 10,
    opacity:0.7,
    marginBottom: 10,
    backgroundColor: Colors.orangeInput, 
},
olvidarContra: {
    fontSize: 15,
    color: Colors.grey,
    marginBottom: 0,
    marginTop: 10,
    right:-90,
    fontFamily: 'MoreSugar',
    textDecorationLine: "underline",
},
textRegistrar: {
    fontSize: 20,
    color: Colors.blueText,
    textAlign: "left", 
    marginLeft: 10,  
    textDecorationLine: "underline",
},

//patas-------------------------------------------------------
pataArriba:{
    width: 50,
    height:40,
    alignSelf:'flex-start',
    right:-60,
    transform:[{rotate: '-15deg'},{translateY:6}],
    zIndex: 10,
},
pataAbajo:{
    width: 40,
    height:40,
    alignSelf:'flex-end',
    marginRight: 14,
    transform:[{rotate: '45deg'}],
},  
//PANTALLA DE Registro------------------------------------
contenedorGrisOscuro:{
    backgroundColor:Colors.greyDark,
    width: '100%',
    borderRadius: 30,
    position:'absolute',
    bottom:50,
}, 
fondoBlancoReg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    backgroundColor: Colors.white,
    padding: 20,
    width:"100%",
    marginBottom: 0,
    position: "relative",
},
tituloRegistro:{
    fontSize: 30,
    top: 60,
    textAlign: "center",
    fontFamily:'MoreSugar',
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

textoUnirse:{
    color: Colors.white,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'MoreSugar',

},
perroGatoReg:{
    width: 259, 
    height:210, 
    position:'absolute', 
    alignSelf:'center',    
    top: 120,
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
    fontFamily:'MoreSugar',
    position: 'absolute'
},
//menu----------------------------------------
textoSeccion:{
    color: Colors.white,
    padding:10,
    backgroundColor:Colors.blueDark,
    borderRadius:50,
    fontFamily:'MoreSugar',
    fontSize: 14,
    width:150,
    left:-125,
    textAlign:'left',
    margin: 20,
},
seccionesMenu:{
    color: Colors.blueText,
    fontFamily:'MoreSugar',
    textDecorationLine:'underline',
    fontSize: 25,
    marginBottom: 46,
},
imagenesMenu:{
    width:100,
    height:100,
    margin:10,
    borderRadius:5,
},
//comunidad animal-----------------------------------------------
titulocomunidad:{
    fontSize: 27, 
    fontFamily:'MoreSugar',
    color: Colors.white,
    fontWeight:'bold', 
    margin: 20,
    position: 'relative',
    alignSelf:'center'
},
cajaNaranja:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width:'90%',
    marginBottom: 20,
},
cajaBlanca:{
    backgroundColor: Colors.white,
    borderRadius:30,
    width:'90%',
    flexDirection:'column',
},
titulos:{
    fontFamily:'MoreSugar',
    fontSize:22,
    fontWeight:'bold', 
    color: Colors.blueText,
    padding:10,
    paddingBottom: 0,
},
parrafoPatitas:{
    fontSize: 17,
    fontFamily: 'MoreSugar',
    textAlign:'justify',
    padding: 10,
    color: Colors.blueText,
},
textosTemas:{
    backgroundColor: Colors.blueLight,
    padding: 20,
    borderRadius:30,
    margin: 10, 
    fontSize: 18,
    fontFamily: 'MoreSugar',
    fontWeight:'bold', 
    textAlign:'justify',
    color: Colors.blueText,
},
iconos:{
    color: Colors.blueText,
    fontSize: 25,
    //no he podido poner los iconos a la izquierda
},
//patitas al rescate-----------------------------------------------
cajablueLight:{
    backgroundColor: Colors.blueLight,
    borderRadius:30,
    marginLeft: 15,
    marginRight: 15,

},
textoInicioUbi:{
    color: Colors.blueText,
    fontFamily: 'MoreSugar',
    fontSize: 16,
    padding:15,
    fontWeight: 'bold',
    marginLeft: 15,
},
textoinfoUbi:{
    backgroundColor:'white', 
    padding:14, 
    borderRadius: 30,
    color: Colors.blueText,
    fontFamily: 'MoreSugar',
    fontSize: 16,
    margin:15,
},
inputRescate:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    margin: 15,
    marginBottom: 0,
    marginLeft: 15,
    color: Colors.blueText,
    fontFamily: 'MoreSugar',
},
input2Rescate:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    margin: 15,
    color: Colors.blueText,
    width:'85%',
    height:  80,
    fontFamily: 'MoreSugar',

},
//refugio de patitas...............................
primerTexto:{
    padding: 10,
    borderRadius:30,
    fontFamily: 'MoreSugar',
},
titulo2Refu:{
    color: Colors.blueDark,
    fontWeight:'bold',
    fontSize: 19,
    fontFamily: 'MoreSugar',
},
inputRefugio:{
    backgroundColor: Colors.white,
    color: Colors.blueDark,
    padding: 10,
    borderRadius:30,
    width: '90%',
    fontFamily: 'MoreSugar',
},
contenedorAnimales:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width: 170,
    alignItems:'center',
    marginBottom: 10,
},
nombrePerro:{
    fontFamily: 'MoreSugar',
    color: Colors.blueText,
    fontWeight:'bold',
    alignSelf:'flex-start',
    paddingLeft: 20,
},

//perros----------------------------------
nombreUbica:{
    //contenedor del nombre y la ubicacion
    flexDirection: 'row',
    columnGap: 230,
    margin:10,


},
iconoUbi:{
    color: Colors.blueText,
},
iconoCorazon:{
    color: Colors.blueText,
    top: -9,
    position:'absolute',
    right: 15,
},
nombrePluto:{
    fontFamily: 'MoreSugar',
    color: Colors.blueText,
    fontWeight:'bold',
    fontSize: 20,
},
cajaNaranjaPerro:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width: 110,
    height: 55,
    alignItems:'center',
    margin: 3,
},
datosPerro:{
    fontFamily: 'MoreSugar',
    color: Colors.blueText,
    fontSize: 18,
},
perfilAna:{
    flexDirection:'row',
},
cajablueLightperros:
{
    backgroundColor: Colors.blueLight,
    borderRadius:30,
    margin: 5,
},
nombreAna:{
    fontFamily: 'MoreSugar',
    color: Colors.blueText,
    fontSize: 16,
    padding:5
},
iconoPerros:{
    backgroundColor: Colors.orangeContainer,
    borderRadius: 60,
    padding: 5,
    height: 45,

},


})
