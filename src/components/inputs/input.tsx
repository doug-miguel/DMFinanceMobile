import { useEffect, useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

interface InputCore {
    title?: string;
    type?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad";
    secure?: boolean
    onChangeText?: (text: string) => void;
}

export default function InputCore({ title, type = "default", secure = false, onChangeText }: InputCore) {
    const [text, setText] = useState('');
    const [secureInput, setSecureInput] = useState(false);

    useEffect(() => {
        setSecureInput(secure)
    }, [secure])

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
                    placeholder="Escreva aqui"
                />
                {secure && <Text onPress={visable}>Icon</Text>}
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
        width: "90%",
        fontSize: 16,
        height: 41,
        fontStyle: "normal",
        fontWeight: "500",
        paddingHorizontal: 6,
    },
});