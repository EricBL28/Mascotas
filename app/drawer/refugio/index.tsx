import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";



const refugio = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <TextInput
                    style={GlobalStyles.inputRefugio}
                    placeholder="Búsqueda"
            />
            
            
            <View style={{ padding: 10, borderRadius:16, width:'90%', marginBottom:40,marginHorizontal:10}}>
                <Text style={GlobalStyles.titulo2Refu}>CATEGORÍAS</Text>
                <Text style={[GlobalStyles.titulo2Refu, {position:'relative', left:250}]}>Ver todo</Text>
                <View style={{flexDirection:"row", columnGap: 20}}>
                    <Image 
                        source={require("../../../assets/images/gatosRefugio.png")}
                        style={{width: 90, height:90, borderRadius:30,}}
                    ></Image>
                    <Image 
                        source={require("../../../assets/images/perrosRefugio.png")}
                        style={{width: 90, height:90, borderRadius:30}}
                    ></Image>
                    <Image 
                        source={require("../../../assets/images/conejoRefugio.png")}
                        style={{width: 90, height:90, borderRadius:30}}
                    ></Image>
                </View>
                
            </View>
            
            <View style={{ width:'90%', borderRadius:30, 
                flexDirection: "row", flexWrap: 'wrap', columnGap:10}}>
                <Pressable onPress={()=>{router.push('../refugio/perros')}}>
                    <View style={GlobalStyles.contenedorAnimales}>
                        <Image 
                            source={require("../../../assets/images/Pluto.png")}
                            style={{width: 155, height: 130, borderRadius:30, marginTop:5}}
                        ></Image>
                        <Text style={GlobalStyles.nombrePerro}>Pluto</Text>
                        <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Macho (1.5 años)</Text>
                    </View>
                </Pressable>
                
                

                <View style={GlobalStyles.contenedorAnimales}>
                    <Image 
                        source={require("../../../assets/images/Stelle.png")}
                        style={{width: 155, height: 130, borderRadius:30, marginTop:5}}
                    ></Image>
                    <Text style={GlobalStyles.nombrePerro}>Stelle</Text>
                    <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Hembra (1.5 años)</Text>
                </View>

                <View style={GlobalStyles.contenedorAnimales}>
                    <Image 
                        source={require("../../../assets/images/Eros.png")}
                        style={{width: 155, height: 130, borderRadius:30, marginTop:5}}
                    ></Image>
                    <Text style={GlobalStyles.nombrePerro}>Eros</Text>
                    <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Macho (1 año)</Text>
                </View>
                <View style={GlobalStyles.contenedorAnimales}>
                    <Image 
                        source={require("../../../assets/images/AfroShaggy.png")}
                        style={{width: 155, height: 130, borderRadius:30, marginTop:5}}
                    ></Image>
                    <Text style={GlobalStyles.nombrePerro}>Afro y Shaggy</Text>
                    <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Machos (3 meses)</Text>
                </View>

                
            </View>

        </View>
        
    )}


export default refugio