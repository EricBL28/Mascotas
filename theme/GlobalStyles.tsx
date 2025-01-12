import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueLogin,
},
fondoBlancoLog:{
    backgroundColor: Colors.white,
},
tituloLogin:{
    fontSize: 35,
    marginTop:72,
    textAlign: "center",
    fontFamily:'Poppins',
},
PetConnect:{
    textAlign: "center",
    fontSize: 55,
    fontFamily:'WendyOne',
},
input: {
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    margin: 20,
    marginBottom: 15,
    backgroundColor: Colors.orangeInput,

  },
})
