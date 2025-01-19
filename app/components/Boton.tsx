import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import * as Haptics from 'expo-haptics';
import { GlobalStyles } from "@/theme/GlobalStyles";


interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

interface Props extends TextProps{color: 'naranja' | 'gris'}


export const Boton = ({label, width, color, onPress}:Props) => {

    const accion = (() => {
        if (onPress) onPress()
        Haptics.selectionAsync();

    })
    

    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton,
                    {width},
                    color === 'naranja' ? GlobalStyles.botonNaranja:null, color ==='gris' 
                    ?GlobalStyles.botonGris:null, color === 'naranja' ?GlobalStyles.botonNaranja:null,
                    color === 'naranja' ?GlobalStyles.botonNaranja:null, color === 'naranja' ?GlobalStyles.botonNaranja:null
                ]}
                onPress={accion}>{label}</Text>
        </Pressable>
    )
};