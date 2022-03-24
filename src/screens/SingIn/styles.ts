import { StyleSheet } from "react-native";
import { theme } from "../../global/Styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: '100%',
        height: 360,
        marginTop: -50,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 35,
        marginBottom: -30,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 34,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    } 
})