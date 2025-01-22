import { StyleSheet } from "react-native"

export const Colores = {
    azul: "#366288",
    blanco:"#ffff",
    naranja:"#FD7712",

}

export const GlobalStyles = StyleSheet.create({
    containerAzul:{
        backgroundColor:Colores.azul,
        height:"100%"
    },
    textoCorreo: {
        alignItems: "center",
        justifyContent: "center", // Asegura el texto centrado
        padding: 10,
        width: 200, // Ajusta para adaptarse al texto o botón
        backgroundColor: Colores.naranja,
        borderRadius: 32,
        marginTop: 20, // Para espaciar el botón de los inputs
      },
      containerBlanco: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: Colores.blanco,
        padding: 20,
      },
      input: {
        width: "80%",
        height: 50,
        borderColor: '#CCC', // Usa un gris suave si no tienes definido
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#FFF', // Fondo blanco para el campo
      },
      buttonText: {
        color: Colores.blanco,
        fontSize: 18,
        fontWeight: "bold",
      },
    logo: {
        width: 60,
        height:60,
        left:"80%",
    },
    textoTitulo:{
        fontSize:35

    },
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 22
    },
    drawerUserContainer: {
        backgroundColor: 'indigo',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginBottom: 30,
        height: 140,
        borderRadius: 10,

    },
    drawerUserImg: {
        width: 100, 
        height: 100, 
        alignSelf:'center', 
        borderRadius: 50
    }
})