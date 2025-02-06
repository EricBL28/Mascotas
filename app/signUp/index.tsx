import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { GlobalStyles } from '../../theme/GlobalStyles';
import Boton from '../../components/Boton';
import { router } from "expo-router";


const signUp = () => {
    return (
        <View style={GlobalStyles.contenedorRegistro}>
            <View style={GlobalStyles.header}>
                <Text style={GlobalStyles.Titulo}>PetConnect</Text>
                <Image source={require("../../assets/images/logo_1.png")} style={GlobalStyles.logoLogin} />
            </View>


            <Image
                source={require("../../assets/images/perroGatoJuntos.png")}
                style={GlobalStyles.perroGatoReg}
            ></Image>

            <View style={GlobalStyles.fondoBlancoReg}>

                

                    <Text style={GlobalStyles.textoAccede}>Registrate</Text>

                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Nombre"
                    />
                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Apellidos"
                    />
                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Correo elctronico"
                    />
                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Contraseña"
                    />

                    <Image
                        source={require("../../assets/images/huellaNaranja.png")}
                        style={GlobalStyles.pataArribaReg}
                    ></Image>
                    <Boton label='Registrarse' width={150} backgroundColor='naranja' link='../drawer'></Boton>
                    <Image
                        source={require("../../assets/images/huellaNaranja.png")}
                        style={GlobalStyles.pataArribaReg}
                    ></Image>
                    <Boton label='Volver' width={150} backgroundColor='naranja' link='../login'></Boton>
                


            </View>


        </View>
    )
}

export default signUp