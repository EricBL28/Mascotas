import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { GlobalStyles } from '@/theme/GlobalStyles'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={GlobalStyles.headerDrawer}>
        <Text style={GlobalStyles.Titulo}>PetConnect</Text>
        <Image 
          source={require("@/assets/images/logo_1.png")} 
          style={GlobalStyles.logoLogin} 
          resizeMode="contain"
        />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;
