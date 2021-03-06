import React from "react";
import {
    View, 
    Text,
    Image,
    StatusBar
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SingIn(){
    return (
        <View style={styles.container}>
            <Image 
                source={IllustrationImg} 
                style={styles.image} 
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize {`\n`}
                    suas jogatinas {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                title="Entrar com Discord"
                activeOpacity={0.7} />
            </View>
        </View>
    )
}