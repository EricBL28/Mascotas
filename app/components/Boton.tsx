import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import * as Haptics from 'expo-haptics';
import { GlobalStyles } from "@/theme/GlobalStyles";


interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

interface Props extends TextProps{color: 'login' | 'signUp' | 'enviar' | 'nuevo' | 'darHogar'}


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
                    color === 'login' ? GlobalStyles.botonNaranja:null, color ==='signUp' 
                    ?GlobalStyles.botonGris:null, color === 'enviar' ?GlobalStyles.botonNaranja:null,
                    color === 'nuevo' ?GlobalStyles.botonNaranja:null, color === 'darHogar' ?GlobalStyles.botonNaranja:null
                ]}
                onPress={accion}>{label}</Text>
        </Pressable>
    )
};