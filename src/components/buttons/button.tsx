import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IBtn {
    onPress: () => void;
    children?: ReactNode;
    variable?: "primary" | "secondary"
}

export default function ButtonCore({ onPress, children, variable = "primary" }: IBtn) {
    return (
        <TouchableOpacity onPress={onPress} style={variable === "primary" ? styles.primary : styles.secondary}>
            <Text style={variable === "primary" ? styles.textPrimary : styles.textSecondary}>
                {children}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    primary: {
        width: 207,
        height: 45,
        flexShrink: 0,
        borderRadius: 30,
        backgroundColor: "#3B82F6",
        justifyContent: "center",
        alignItems: "center"
    },
    textPrimary: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 22,
        textTransform: "capitalize",
    },
    secondary: {
        width: 207,
        height: 45,
        flexShrink: 0,
        borderRadius: 30,
        backgroundColor: "#D0E1FF",
        justifyContent: "center",
        alignItems: "center"
    },
    textSecondary: {
        color: "#1E3A8A",
        textAlign: "center",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 22,
        textTransform: "capitalize",
    },

});