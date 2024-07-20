import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, ViewStyle } from "react-native";
import Base from "./base";

interface BaseProps {
    children?: React.ReactNode;
    style?: ViewStyle,
}

export default function BaseScroll({ children, style }: BaseProps) {
    return (
        <Base style={style}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                <ScrollView>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </Base>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -50,
    },
});
