import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Boton from "../../../components/Boton";
import { Ionicons } from '@expo/vector-icons';



const comunidad = () => {
    return (
        <View style={GlobalStyles.contenedorPatitas}>

            <View style={GlobalStyles.cajablueLight}>
                <Text style={GlobalStyles.textoInicioUbi}>
                    Indica el punto donde un animal, una colonia o una
                    situación que requiere atención y descríbela para que
                    podamos actuar juntos
                </Text>
                <Image
                    source={require("../../../assets/images/ubicacion.png")}
                    style={{
                        width: '100%', height: 300, position: 'relative',
                        alignSelf: 'center', margin: 15, marginBottom: 0
                    }}
                ></Image>


                <Text style={GlobalStyles.textoinfoUbi}>La ubicación se añadirá cuando se seleccione en el mapa.</Text>


            </View>
            <TextInput placeholder="Describe la situación aquí..." style={GlobalStyles.input2Rescate} />
            <Text style={GlobalStyles.enviar}>
                Enviar
            </Text>
        </View>


    )
}


export default comunidad