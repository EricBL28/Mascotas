import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from "expo-router";
import Boton from '../../../../components/Boton';
import { Colors } from '../../../../theme/Colors'




const perros = () => {
    return (
        <View style={GlobalStyles.contenedorPerros}>

            <View style={{ backgroundColor: 'white', borderRadius: 12, width: '90%', height: '95%' }}>
                <Image
                    source={require("../../../../assets/images/Pluto.png")}
                    style={{ width: 285, height: 180, borderRadius: 19, alignSelf: 'center', marginTop: 20, }}
                ></Image>

                <View style={GlobalStyles.nombreUbica}>
                    <Text style={GlobalStyles.nombrePluto}>Pluto</Text>
                    <Ionicons name="heart-circle" color="blue" size={45} style={GlobalStyles.iconoCorazon} />
                </View>

                <View style={{ flexDirection: 'row', columnGap: 5, }}>
                    <Ionicons name="location" size={30} style={GlobalStyles.iconoUbi} />
                    <Text style={{ left:10 }}>Murcia</Text>
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <View style={GlobalStyles.cajaNaranjaPerro}>
                        <Text style={[GlobalStyles.datosPerro, { fontWeight: 'bold', }]}>Sexo</Text>
                        <Text style={[GlobalStyles.datosPerro, { fontSize: 14, }]}>Macho</Text>
                    </View>
                    <View style={GlobalStyles.cajaNaranjaPerro}>
                        <Text style={[GlobalStyles.datosPerro, { fontWeight: 'bold', }]}>Edad</Text>
                        <Text style={[GlobalStyles.datosPerro, { fontSize: 14, }]}>1.5 años</Text>
                    </View>
                    <View style={GlobalStyles.cajaNaranjaPerro}>
                        <Text style={[GlobalStyles.datosPerro, { fontWeight: 'bold', }]}>Tipos</Text>
                        <Text style={[GlobalStyles.datosPerro, { fontSize: 14, }]}>Bodeguero</Text>
                    </View>
                </View>

                <View>

                    <View style={GlobalStyles.cuadroAna}>
                        <View style={GlobalStyles.perfilAna}>
                            <Image
                                source={require("../../../../assets/images/Eros.png")}
                                style={{ width: 25, height: 25, borderRadius: 30, borderWidth: 2, alignSelf: 'center', margin: 10, }}
                            ></Image>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={GlobalStyles.datoAna}>Ana</Text>
                                <Text style={GlobalStyles.datoAna}>PerrosAbandona2</Text>
                            </View>
                            <Ionicons name="chatbubble-ellipses" size={30} style={GlobalStyles.iconoPerros} />

                        </View>
                        <Text style={GlobalStyles.nombreAna}>
                            Pluto entró de forma inesperada a una peluquería en la que justo estaba uno de nuestros
                            voluntarios, no lleva chip y nadie lo ha reclamado así que nusca familia definitiva!
                        </Text>
                    </View>

                    <View style={GlobalStyles.dameHogar}>
                         <Text style={GlobalStyles.textodameHogar}>
                        Dame un hogar
                    </Text>
                    </View>
                   

                </View>

            </View>

        </View>

    )
}


export default perros