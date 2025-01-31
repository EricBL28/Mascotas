import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";




const menu = () => {
    const navigation = useNavigation();
    return (
        <View style={GlobalStyles.contenedor}>
            


            <View style={{ backgroundColor: 'white', width: '100%', alignItems: "center" }}>

                <Text style={GlobalStyles.textoSeccion}>FUNCIONES</Text>
                <View style={{ flexDirection: 'row', columnGap: 20, }}>
                    <Pressable onPress={() => { router.push('/drawer/patitasRescate') }}>
                        <Image
                            source={require("../../assets/images/patitasRescate.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                    </Pressable>

                    <Pressable onPress={() => { Alert.alert('Infórmate de más pulsando sobre Comunidad Animal') }}>
                        <Image
                            source={require("../../assets/images/patitasMarcha.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                    </Pressable>

                    <Pressable onPress={() => { router.push('/drawer/refugio') }}>
                        <Image
                            source={require("../../assets/images/refugio.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                    </Pressable>




                </View>
                <View style={{ flexDirection: 'row', columnGap: 20, }}>

                    <Pressable onPress={() => { router.push('/drawer/comunidad') }}>
                        <Image
                            source={require("../../assets/images/comunidad.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image> 
                    </Pressable>


                    <Pressable onPress={() => { Alert.alert('Conócenos navengando en nuestra app') }}>
                        <Image
                            source={require("../../assets/images/sobrePetconnect.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                    </Pressable>



                </View>
                <Text style={GlobalStyles.textoSeccion}>COLABORADORES</Text>

                <View style={{ flexDirection: 'row', columnGap: 20, marginBottom: 20 }}>
                    <Image
                        source={require("../../assets/images/logoProtectora1.png")}
                        style={{ width: 150, height: 150 }}
                    ></Image>
                    <Image
                        source={require("../../assets/images/logoProtectora2.png")}
                        style={{ width: 150, height: 150 }}
                    ></Image>
                </View>
            </View>







        </View>


    )
}


export default menu
