import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";



const refugio = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Ionicons name="menu-outline" color="white" style={{position:'relative', top: 3, left: 15, fontSize:50}}/>
                <Text style={GlobalStyles.titulocomunidad}>REFUGIO DE PATITAS</Text>
                <Image 
                    source={require("../../assets/images/logo_2.png")}
                    style={{width: 50, height:50, position:'relative', right:15}}
                ></Image>
            </View>
            <View>
                <Text>
                    Adoptar es un compromiso paratoda la vida, piénsalo bien antes dedar el paso.
                    Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.
                </Text>
                <Image 
                    source={require("../../assets/images/perritosYgatitos.png")}
                    style={{width: 50, height:50, position:'relative', right:15}}
                ></Image>
            </View>
            <View>
                <Text>CATEGORÍAS</Text>

            </View>
            <input type="Búsqueda por nombre..." />
            <View>


                
            </View>

        </View>
        
    )}


export default refugio