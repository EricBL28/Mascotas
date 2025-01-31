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
          title: 'Pantalla inicio',
          
        }}
      />
      <Drawer.Screen
        name="productos/index" 
        options={{
          drawerLabel: 'PERROS',
          title: 'Listado de perros',
          
        }}
      />
      
      <Drawer.Screen
        name="comunidad/index" 
        options={{
          drawerLabel: 'COMUNIDAD',
          title: 'Comunidad',
        }}
      />
      <Drawer.Screen
        name="configuracion/configuracion" 
        options={{
          drawerLabel: 'CONFIGURACION',
          title: 'Pantalla configuración',
        }}
      />

      <Drawer.Screen
        name="refugio/index" 
        options={{
          drawerLabel: 'REFUGIO',
          title: 'Refugio',
        }}
      />

      <Drawer.Screen
        name="patitasRescate/index" 
        options={{
          drawerLabel: 'PATITASRESCATES',
          title: 'Patitas Rescates',
        }}
      />

      
    </Drawer>

    
  );
}

export default LayoutDrawer;