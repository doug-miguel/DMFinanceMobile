import { CloseComponente, OpenComponente } from "@/assets/images/SvgComponent";
import React from "react";
import { TextInput, Text, StyleSheet, View, TextInputProps } from "react-native";

interface InputCore extends TextInputProps {
    title?: string;
    type?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad";
    secure?: boolean;
    IconSecure?: boolean;
    onChangeText?: (text: string) => void;
}

export default function InputCore({ title, type = "default", secure, IconSecure, onChangeText, placeholder, ...ress }: InputCore) {
    const [text, setText] = React.useState('');
    const [secureInput, setSecureInput] = React.useState(false);

    React.useEffect(() => {
        if (secure)
            setSecureInput(secure)
    }, [])

    function visable() {
        setSecureInput(!secureInput)
    }

    function handleTextChange(newText: string) {
        setText(newText);
        if (onChangeText) {
            onChangeText(newText);
        }
    }

    return (
        <View>
            <Text style={styles.textInput}>{title}</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleTextChange}
                    value={text}
                    keyboardType={type}
                    secureTextEntry={secureInput}
                    placeholder={placeholder}
                    {...ress}
                />
                {IconSecure && (secureInput ? <Text style={styles.icon} onPress={visable}><OpenComponente /></Text> : <Text style={styles.icon} onPress={visable}><CloseComponente /></Text>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        color: "#1E40AF",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 30,
        textTransform: "capitalize",
    },
    containerInput: {
        width: 357,
        borderRadius: 18,
        backgroundColor: "#D0E1FF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 6,
    },
    input: {
        color: "#1E3A8A",
        width: "85%",
        fontSize: 16,
        height: 41,
        fontStyle: "normal",
        fontWeight: "500",
        paddingHorizontal: 6,
    },
    icon: {
        height: '80%',
        margin: 'auto',
    }
});