import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { reloadAppAsync } from "expo";

export const GlobalStyles = StyleSheet.create({
    contenedor: {
        backgroundColor: Colors.blueDark,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    contenedorRegistro: {
        backgroundColor: Colors.blueDark,
        alignItems: 'center',
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blueDark,
    },
    drawerUserImg: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50
    },
    //botones -------------------------------------------
    boton: {
        width: 150,
        height: 50,
        textAlign: 'center',
        padding: 0,
        fontSize: 12,
        borderRadius: 30,
        backgroundColor: Colors.orangeInput,
        opacity: 0.7,
        fontFamily: 'MoreSugar',
        fontWeight: 'bold',
    },
    botonNaranja:
    {
        marginTop: -15,
        backgroundColor: Colors.orangeButton,
        color: Colors.blueText,
        textAlign: 'center',
        padding: 5,
        width: 'auto',
        height: 30,
    },
    botonGris:
    {
        backgroundColor: Colors.grey,
        color: Colors.white,
        borderBottomColor: Colors.white,
        width: 'auto',
        borderWidth: 4,
        height: 59,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        marginBottom: 30,
    },
    //PANTALLA DE LOGIN------------------------------------
    logoLogin: {
        width: 100,
        height: 100,
        left: -15,
        resizeMode: "contain",
        marginLeft: 45,
    },
    header: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 80,
    },
    Titulo: {
        fontSize: 35,
        right: -35,
        fontWeight: "bold",
        fontFamily: 'MoreSugar',
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
        width: "100%",
        marginTop:-50,
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
        fontFamily: 'MoreSugar',
        color: Colors.white,
    },
    perroGato: {
        width: '60%',
        marginBottom: 0,
        resizeMode: "contain",
        marginTop: '-41%',
    },
    textoAccede: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: 'MoreSugar',
        marginTop: 0,
        marginBottom:15,
        color: Colors.blueText,
    },
    input: {
        borderRadius: 30,
        padding: 15,
        fontSize: 14,
        fontFamily:'MoreSugar',
        width: 270,
        margin: 10,
        opacity: 0.7,
        marginBottom: 10,
        backgroundColor: Colors.orangeInput,
    },
    olvidarContra: {
        fontSize: 14,
        color: Colors.grey,
        right: -60,
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
    pataArriba: {
        width: 50,
        height: 40,
        alignSelf: 'flex-start',
        right: -45,
        transform: [{ rotate: '-15deg' }, { translateY: 5 }],
        zIndex: 10,
    },
    pataArribaReg: {
        width: 50,
        height: 40,
        alignSelf: 'flex-start',
        right: -55,
        transform: [{ rotate: '-15deg' }, { translateY: 5 }],
        zIndex: 10,
    },
    //PANTALLA DE Registro------------------------------------
    contenedorGrisOscuro: {
        backgroundColor: Colors.greyDark,
        width: '100%',
        borderRadius: 30,
        position: 'absolute',
        bottom: 50,
    },
    fondoBlancoReg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: Colors.white,
        padding: 20,
        width: "100%",
        top:-20,
        marginBottom: 0,
        position: "relative",
    },
    tituloRegistro: {
        fontSize: 30,
        top: 60,
        textAlign: "center",
        fontFamily: 'MoreSugar',
        color: Colors.blueDark,

    },
    PetConnectRegistro: {
        textAlign: "center",
        fontSize: 50,
        fontFamily: 'MoreSugar',
        color: Colors.blueDark,
        marginBottom: 20,
        top: 50,
    },

    textoUnirse: {
        color: Colors.white,
        fontSize: 29,
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: 'MoreSugar',

    },
    perroGatoReg: {
        
        position: 'absolute',
        alignSelf: 'center',
        top: -10,
        width: '50%',
        resizeMode: "contain",
        
    },
    contenedorBotones: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 60,
    },
    textoAccedeARefugio: {
        color: Colors.blueText,
        
        bottom: 5,
        fontSize: 20,
        fontFamily: 'MoreSugar',
        position: 'absolute'
    },
    //menu----------------------------------------
    textoSeccion: {
        color: Colors.white,
        padding: 5,
        backgroundColor: Colors.blueDark,
        borderRadius: 50,
        fontSize: 14,
        width: 150,
        left: '-25%',
        textAlign: 'left',
        margin: 20,
    },
    Subtexto:{
        alignItems: "center",
    },
    contenedorMenu: {
        marginTop: 0,
        backgroundColor: Colors.blueLight,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    seccionesMenu: {
        color: Colors.blueText,
        fontFamily: 'MoreSugar',
        textDecorationLine: 'underline',
        fontSize: 25,
        marginBottom: 46,
    },
    imagenesMenu: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 5,
    },
    //comunidad animal-----------------------------------------------
    titulocomunidad: {
        fontSize: 27,
        fontFamily: 'MoreSugar',
        color: Colors.white,
        fontWeight: 'bold',
        margin: 20,
        position: 'relative',
        alignSelf: 'center'
    },
    cajaNaranja: {
        backgroundColor: Colors.orangeContainer,
        borderRadius: 30,
        width: '100%',
        marginBottom: 20,
    },
    cajaBlanca: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        width: '100%',
        flexDirection: 'column',
    },
    titulos: {
        fontFamily: 'MoreSugar',
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.blueText,
        padding: 10,
        paddingBottom: 0,
    },
    parrafoPatitas: {
        fontSize: 17,
        fontFamily: 'MoreSugar',
        textAlign: 'justify',
        padding: 10,
        color: Colors.blueText,
    },
    textosTemas: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 30,
        margin: 10,
        fontSize: 14,
        fontFamily: 'MoreSugar',
        fontWeight: 'bold',
        textAlign: 'justify',
        color: Colors.blueText,
    },
    iconos: {
        color: Colors.blueText,
        fontSize: 25,
    },

    //patitas al rescate-----------------------------------------------
    cajablueLight: {
        backgroundColor: Colors.blueLight,
        marginHorizontal: 15,
        width:'100%',

    },
    enviar: {
        color: Colors.blueText, 
        fontSize: 20, 
        height:40,
        width:185,
        backgroundColor: Colors.orangeButton,
        borderRadius: 100,
        textAlign:'center',
        padding:5,
        
    },
    contenedorPatitas: {
        backgroundColor: Colors.blueDark,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textoInicioUbi: {
        textAlign:'center',
        color: Colors.blueText,
        fontSize: 14,
        padding: 10,
        marginLeft: 15,
    },
    textoinfoUbi: {
        
        padding: 0,
        borderRadius: 30,
        color: Colors.blueText,
        fontFamily: 'MoreSugar',
        fontSize: 16,
        margin: 15,
    },
    inputRescate: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        margin: 15,
        marginBottom: 0,
        marginLeft: 15,
        color: Colors.blueText,
        fontFamily: 'MoreSugar',
    },
    input2Rescate: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        margin: 15,
        color: Colors.blueText,
        width: '85%',
        height: 80,
        fontFamily: 'MoreSugar',

    },
    //refugio de patitas...............................
    primerTexto: {
        padding: 10,
        borderRadius: 30,
        fontFamily: 'MoreSugar',
    },
    titulo2Refu: {
        color: Colors.white,
        fontSize: 15,
        paddingHorizontal:15,
        width:'auto',
        borderRadius:15,
        backgroundColor:Colors.blueDark,
        marginBottom:15,
    },
    inputRefugio: {
        backgroundColor: Colors.white,
        color: Colors.blueDark,
        padding: 10,
        borderRadius: 30,
        width: '60%',
        
    },
    contenedorAnimales: {
        backgroundColor: Colors.orangeContainer,
        borderRadius: 30,
        width: 140,
        alignItems: 'center',
        marginBottom: 10,
    },
    nombrePerro: {
        fontFamily: 'MoreSugar',
        color: Colors.blueText,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 20,
    },

    //perros----------------------------------
    nombreUbica: {
        flexDirection: 'row',
        columnGap: 230,
        margin: 10,


    },
    dameHogar: {
        paddingVertical:15,
        marginHorizontal:20
    },
    textodameHogar:{
        color: 'white', 
        fontSize: 14, 
        padding: 0, 
        backgroundColor: Colors.blueDark,
        borderRadius: 12,
        textAlign: 'center',
        paddingVertical:15,
        top:-20,
    },
    contenedorPerros: {
        backgroundColor: Colors.naranja,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    iconoUbi: {
        color: Colors.blueText,
        right:-12,
        top:-10,
    },
    iconoUbiMapa:{
        color: Colors.blueText,
        top:15,
    },
    iconoCorazon: {
        color: Colors.blueText,
        
        position: 'absolute',
        right: 15,
    },
    nombrePluto: {
        right:-20,
        color: Colors.blueText,
        fontSize: 26,
    },
    cajaNaranjaPerro: {
        backgroundColor: Colors.orangeContainer,
        borderRadius: 16,
        width: 80,
        height: 80,
        alignItems: 'center',
        display:'flex',
        marginHorizontal: 13,
    },
    datosPerro: {
        fontFamily: 'MoreSugar',
        color: Colors.blueText,
        fontSize: 18,
    },
    datoAna:{
        color: Colors.blueText,
        fontSize: 15,
    },
    cuadroAna:{
        backgroundColor:Colors.naranja,
        
        height:'35%',
        borderRadius: 12,
        textAlign: 'center',
        marginVertical:20,
        marginHorizontal:20
    },
    perfilAna: {
        
        flexDirection: 'row',
    },
    cajablueLightperros:
    {
        backgroundColor: Colors.blueLight,
        borderRadius: 30,
        margin: 5,
    },
    nombreAna: {
        
        color: Colors.blueText,
        fontSize: 12,
        padding: 4,
    },
    iconoPerros: {
        backgroundColor: Colors.naranja,
        borderRadius: 60,
        padding: 5,
        height: 45,
        left:50,
    },
    contenedorRefugio:{
        backgroundColor:Colors.blueLight,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    cajaComunidad: {
        backgroundColor: Colors.blueLight,
        borderRadius: 30,
        width: '100%',
        flexDirection: 'column',
    },


})
