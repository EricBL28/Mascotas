import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image} from 'react-native';
import Boton from "../components/Boton";


const comunidad = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <Text style={GlobalStyles.titulocomunidad}>COMUNIDAD ANIMAL</Text>
            <View style={GlobalStyles.cajaNaranja}>
                <Text style={GlobalStyles.titulos}>PATITAS EN MARCHA (eventos)</Text>
                <Text style={GlobalStyles.parrafoPatitas}>
                    Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. 
                    Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!
                </Text>
            </View>

            <View style={GlobalStyles.cajaBlanca}>
                <Text style={GlobalStyles.titulos}>TEMAS DE DISCUSIÓN</Text>

                <Text style={GlobalStyles.textosTemas}> Guías de alimentación B.A.R.F. para tu animal.</Text>
                <Text style={GlobalStyles.textosTemas}>Consejos para sobrellevar la ola de calor con tu mascota.</Text>
                <Text style={GlobalStyles.textosTemas}>Como empezar a adiestrar a tu mascota.</Text>



                <Boton label='Nuevo' backgroundColor="naranja" width={120}></Boton>
            </View>
        
        </View>


    )}


export default comunidad
