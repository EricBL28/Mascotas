import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";



const perros = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Ionicons name="menu-outline" color="white" style={{position:'relative', top: 3, left: 15, fontSize:50}}/>
                <Text style={GlobalStyles.titulocomunidad}>PERROS</Text>
                <Image 
                    source={require("../../../assets/images/logo_2.png")}
                    style={{width: 50, height:50, position:'relative', right:15}}
                ></Image>
            </View>
            <View style={{backgroundColor:'white', borderRadius:30, width:'90%'}}>
                <Image 
                    source={require("../../../assets/images/Pluto.png")}
                    style={{width: 300, height:300, borderRadius:30,}}
                ></Image>


            </View>

        </View>
        
    )}


export default perros