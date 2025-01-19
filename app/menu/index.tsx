import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text} from 'react-native';


const menu = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <Text style={{color:'white', fontSize:40, fontFamily: 'WendyOne', marginTop:30,}}>Petconnect</Text>
        
            <View style={{backgroundColor:'white', width:'95%', borderRadius:30, flexDirection:'row',
                flexWrap: 'wrap',  
                columnGap: 60,}}>

                <Text style={GlobalStyles.seccionesMenu}>Secciones</Text>
                <View>
                    <Text style={GlobalStyles.seccionesMenu}>Patitas al rescate</Text>
                    <Text style={GlobalStyles.seccionesMenu}>Patitas en marcha</Text>
                    <Text style={GlobalStyles.seccionesMenu}>Refugio de patitas</Text>
                    <Text style={GlobalStyles.seccionesMenu}>Comunidad animal</Text>
                    <Text style={GlobalStyles.seccionesMenu}>Sobre Petconnect</Text>
                </View>
                <View>
                    

                </View>
                
                



            </View>
        
        
        
        
        
        </View>


    )}


export default menu
