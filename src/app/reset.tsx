import Base from "@/components/base";
import BaseScroll from "@/components/baseScroll";
import ButtonCore from "@/components/buttons/button";
import InputCore from "@/components/inputs/input";
import Select from "@/components/inputs/select";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function ResetScreen() {
    const [message, setMessage] = React.useState('');
    const [reset, setReset] = React.useState(false);

    const router = useRouter();
    const options: string[] = ["", "Qual primeira escola que estudou ?"];

    function navigate() {
        router.push('/')
    }

    function onSelectMessage(mes: string) {
        console.log("🚀 ~ onSelectMen ~ mes:", mes);
        setMessage(mes)
    }

    function onNext() {
        setReset(!reset)
    }

    function inputText(text: string) {
        console.log("🚀 ~ inputText ~ text:", text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recuperar senha!</Text>
            <BaseScroll>
                <Text style={styles.textBase}>Redefinir senha!</Text>
                {!reset &&
                    <View style={styles.response}>
                        <Select title="Selecione uma frace e responda" options={options} onSelect={onSelectMessage} />
                        <InputCore title="Resposta" />
                        <ButtonCore onPress={onNext}>Proxima etapa</ButtonCore>
                        <ButtonCore onPress={navigate} variable="secondary">Cancelar</ButtonCore>
                    </View>
                }
                {reset &&
                    <View style={styles.response}>
                        <InputCore title="Senha" type='default' secure={true} IconSecure={true} placeholder="********" onChangeText={(text) => inputText(text)} />
                        <InputCore title="Confirmação de Senha" type='default' secure={true} placeholder="********" IconSecure={true} onChangeText={(text) => inputText(text)} />
                        <ButtonCore onPress={navigate}>Confirmar</ButtonCore>
                        <ButtonCore onPress={navigate} variable="secondary">Cancelar</ButtonCore>
                    </View>
                }
            </BaseScroll>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -50
    },
    content: {
        paddingTop: 25,
        gap: 50,
    },
    text: {
        textAlign: "center",
        color: "#F0F4FF",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 30,
        textTransform: "capitalize",
        paddingTop: 65,
        paddingBottom: 65,
    },
    textBase: {
        fontSize: 20,
        color: '#1E3A8A',
        fontWeight: '600',
        textTransform: 'capitalize',
        lineHeight: 20,
        marginBottom: 50,
        textAlign: 'center'
    },
    response: {
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
