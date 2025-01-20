import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect } from "expo-router";
import { View,Text,Image } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



export default function Index() {
  return (<View style={GlobalStyles.containerAzul}>

    <View>
      <Image source={require("../assets/images/logo02.png")} style={GlobalStyles.logo}>
      </Image>
      
    </View>

    

    <View style={GlobalStyles.containerBlanco}>
      
    </View>
  </View>);
}