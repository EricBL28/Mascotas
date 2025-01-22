import { StyleSheet } from "react-native"

export const Colores = {
    azul: "#366288",
    blanco: "#ffff",
    naranja: "#FD7712",
    gris:'#CCC',

}

export const GlobalStyles = StyleSheet.create({
    header: {
        marginTop: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 75,

    },
    Titulo: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#333",
    },
    containerAzul: {
        backgroundColor: Colores.azul,
        height: "100%"
    },
    textoCorreo: {
        alignItems: "center",
        justifyContent: "center", 
        padding: 10,
        width: 200, 
        backgroundColor: Colores.naranja,
        borderRadius: 32,
        marginTop: 20, 
    },
    containerBlanco: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: Colores.blanco,
        padding: 20,
        marginBottom:50,
        position:"fixed",
    },
    input: {
        width: "80%",
        height: 50,
        borderColor: Colores.gris, 
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: Colores.blanco, 
    },
    GatitoPerrito:{
        width: 250,
        height: 250,
        resizeMode: "contain",
        marginTop: -300, 
        
    },
    buttonText: {
        color: Colores.blanco,
        fontSize: 18,
        fontWeight: "bold",
    },
    textoInicioSesion:{
        fontSize: 35,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        marginLeft: 45,
    },
    textoTitulo: {
        fontSize: 30,
        color:Colores.azul

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
        alignSelf: 'center',
        borderRadius: 50
    }
})