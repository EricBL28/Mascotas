import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";


//este es el MENUUUUUUUU------------------------------------------------------------------

const menu = () => {
    const navigation = useNavigation();
    return (
        <View style={GlobalStyles.contenedor}>
            <View style={{flexDirection: 'row', columnGap:24, alignItems:'center'}}>      
                <Text style={{color:'white', fontSize:40, fontFamily: 'WendyOne', marginTop:30,}}>Petconnect</Text>
                <Ionicons name="notifications-outline" size={50} color="white" style={{position:'relative', top: 10, right:5}}/>
            </View>
            

            <View style={{backgroundColor:'white', width:'95%', borderRadius:30}}>

                <Text style={GlobalStyles.textoSeccion}>Secciones</Text>
                <View style={{flexDirection:'row', columnGap: 20,}}>
                    <View>
                        <Image 
                            source={require("../../assets/images/patitasRescate.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/patitasMarcha.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/refugio.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/comunidad.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/sobrePetconnect.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                    </View>
                    <View>
                        <Pressable onPress={()=>{router.push('/drawer/patitasRescate')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Patitas al rescate</Text>
                        </Pressable>

                        <Pressable onPress={()=>{router.push('/drawer/comunidad')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Patitas en marcha</Text>
                        </Pressable>
                            
                        <Pressable onPress={()=>{router.push('/drawer/refugio')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Refugio de patitas</Text>
                        </Pressable>

                        <Pressable onPress={()=>{router.push('/drawer/comunidad')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Comunidad animal</Text>
                        </Pressable>
                            
                        <Pressable onPress= {()=>{Alert.alert('En Desarrollo!')}} style={ { marginTop: -25, marginRight: 40 }}>
                            <Text style={GlobalStyles.seccionesMenu}>Sobre Petconnect</Text>
                        </Pressable>
                    </View>

                </View>
                
                
                
        
            </View>
        
            <Text style={{fontFamily: 'Poppins', color:'white', fontSize:20, fontWeight:'bold', margin:10}}>PROTECTORAS EN COLABORACIÓN</Text>
            <View style={{flexDirection:'row', columnGap: 20,}}>
                <Image 
                    source={require("../../assets/images/logoProtectora1.png")}
                    style={{width:150, height:150}}
                ></Image>
                <Image 
                    source={require("../../assets/images/logoProtectora2.png")}
                    style={{width:150, height:150}}
                ></Image>
            </View>
            
        
        
        
        </View>


    )}


export default menu
