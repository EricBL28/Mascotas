import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";



const refugio = () => {
    return (
        <View style={GlobalStyles.contenedorRefugio}>
            <TextInput
                    style={GlobalStyles.inputRefugio}
                    placeholder="Búsqueda"
            />
            
            
            <View style={{ padding: 10, borderRadius:16, width:'90%', marginBottom:40,marginHorizontal:10}}>
                
                <View style={{flexDirection:'row', columnGap: 95}}>
                <Text style={GlobalStyles.titulo2Refu}>CATEGORÍAS</Text>
                <Text style={GlobalStyles.titulo2Refu}>VER MAS</Text>
                </View>
                
                <View style={{flexDirection:"row", columnGap: 20,marginTop:15}}>
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
            <Text style={[GlobalStyles.titulo2Refu, { right:'28%' }]}>ANIMALES</Text>
            
            <View style={{ width:'85%', borderRadius:30, 
                flexDirection: "row", flexWrap: 'wrap', columnGap:20}}>
                <Pressable onPress={()=>{router.push('../refugio/perros')}}>
                    <View style={GlobalStyles.contenedorAnimales}>
                        <Image 
                            source={require("../../../assets/images/Pluto.png")}
                            style={{width: 100, height: 100, borderRadius:20, marginTop:5}}
                        ></Image>
                        <Text style={GlobalStyles.nombrePerro}>Pluto</Text>
                        <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Macho (1.5 años)</Text>
                    </View>
                </Pressable>
                
                

                <View style={GlobalStyles.contenedorAnimales}>
                    <Image 
                        source={require("../../../assets/images/Stelle.png")}
                        style={{width: 100, height: 100, borderRadius:20, marginTop:5}}
                    ></Image>
                    <Text style={GlobalStyles.nombrePerro}>Shaggy</Text>
                    <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Macho (1.5 años)</Text>
                </View>

                <View style={GlobalStyles.contenedorAnimales}>
                    <Image 
                        source={require("../../../assets/images/Eros.png")}
                        style={{width: 100, height: 100, borderRadius:20, marginTop:5}}
                    ></Image>
                    <Text style={GlobalStyles.nombrePerro}>Argos</Text>
                    <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Hembra (1,5 año)</Text>
                </View>
                <View style={GlobalStyles.contenedorAnimales}>
                    <Image 
                        source={require("../../../assets/images/AfroShaggy.png")}
                        style={{width: 100, height: 100, borderRadius:20, marginTop:5}}
                    ></Image>
                    <Text style={GlobalStyles.nombrePerro}>Zipi y Zape</Text>
                    <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Machos (3 meses)</Text>
                </View>

                
            </View>

        </View>
        
    )}


export default refugio