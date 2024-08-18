import { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface IBtn extends PressableProps {
    onPress: () => void;
    children?: ReactNode;
    variable?: "primary" | "secondary";
    size?: "sm" | "md" | "lg",
    loading?: boolean;
    disabled?: boolean | null;
}

export default function ButtonCore({ onPress, children, size = "md", variable = "primary", loading, disabled, ...rest }: IBtn) {
    const buttonStyle = [
        variable === "primary" ? styles.primary : styles.secondary,
        size === "sm" ? styles.sizesm : size === "lg" ? styles.sizelg : styles.sizemd
    ];

    return (
        <Pressable
            onPress={onPress}
            style={[buttonStyle, loading && styles.loading || disabled && styles.loading]}
            disabled={disabled}
            {...rest}>
            <Text style={variable === "primary" ? styles.textPrimary : styles.textSecondary}>
                {children}
            </Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    primary: {
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
    sizesm: {
        width: 160,
    },
    sizemd: {
        width: 207,
    },
    sizelg: {
        width: 160,
    },
    loading: {
        opacity: .5
    }
});