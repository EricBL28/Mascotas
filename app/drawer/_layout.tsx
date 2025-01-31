import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import CustomDrawer from '@/components/CustomDrawer';
import { Colors } from "../../theme/Colors";

const LayoutDrawer = () => {
  return (
    <Drawer 
  drawerContent={CustomDrawer}
  screenOptions={{
    drawerStyle: { backgroundColor: Colors.blueDark }, // Fondo naranja sólido
    drawerInactiveTintColor: '#000000', // Texto negro en ítems inactivos
    drawerActiveBackgroundColor: '#B3781D', // Fondo naranja oscuro en ítems activos
    drawerActiveTintColor: '#FFFFFF', // Texto blanco en ítems activos
    overlayColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro cuando el drawer está abierto
    drawerItemStyle: {
      borderRadius: 10, // Bordes redondeados en los ítems
      marginVertical: 5, // Espaciado entre ítems
    }
    

  }}
>
             
<Drawer.Screen
  name="index"
  options={{
    drawerLabel: 'INICIO',
    headerStyle: { backgroundColor: Colors.blueDark }, 
    title:"INICIO",
    headerTitleStyle: { color: 'white', fontSize: 40 ,fontFamily: 'MoreSugar',right:-90},
  }}
/>;

      <Drawer.Screen
        name="refugio/perros/index" 
        options={{
          drawerLabel: 'PERROS',
          title: 'Perros',
          headerStyle: { backgroundColor: Colors.blueDark }, 
          headerTitleStyle: { color: 'white', fontSize: 40 ,fontFamily: 'MoreSugar', right:-80},
         
        }}
      />
      
      <Drawer.Screen
        name="comunidad/index" 
        options={{
          drawerLabel: 'COMUNIDAD',
          title: 'Comunidad',
          headerStyle: { backgroundColor: Colors.blueDark }, 
          headerTitleStyle: { color: 'white', fontSize: 40 ,fontFamily: 'MoreSugar', right:-60},
        }}
      />
      

      <Drawer.Screen
        name="refugio/index" 
        options={{
          drawerLabel: 'REFUGIO',
          title: 'Refugio',
          headerStyle: { backgroundColor: Colors.blueDark }, 
          headerTitleStyle: { color: 'white', fontSize: 40 ,fontFamily: 'MoreSugar',right:-90},
        }}
      />

      <Drawer.Screen
        name="patitasRescate/index" 
        options={{
          drawerLabel: 'PATITAS AL RESCATES',
          title: 'Patitas Rescates',
          headerStyle: { backgroundColor: Colors.blueDark }, 
          headerTitleStyle: { color: 'white', fontSize: 40 ,fontFamily: 'MoreSugar',right:-10},
        }}
      />

      

      <Drawer.Screen
        name="login/index" 
        options={{
          drawerLabel: '',
          
        }}
        
      />
      
      
      
      
    </Drawer>

    
  );
}

export default LayoutDrawer;