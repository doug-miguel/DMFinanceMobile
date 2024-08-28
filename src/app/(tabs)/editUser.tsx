import Base from "@/components/base";
import ButtonCore from "@/components/buttons/button";
import Header from "@/components/header";
import InputCore from "@/components/inputs/input";
import Select from "@/components/inputs/select";
import { options } from "@/hooks/options";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

interface ValueProps {
    label: string;
    value: string | number
}

export default function EditUser() {
    const [message, setMessage] = React.useState('');
    const router = useRouter();

    function onSelectMessage(mes: ValueProps) {
        setMessage(mes.value.toString())
    }

    function inputText(text: string) {
    }

    function navigate() {
        router.push('/user')
    }

    function editUser() {
        console.log('Edit')
        router.push('/user')
    }

    return (
        <View style={styles.containerBase}>
            <Header title='Editar conta' back={true} />
            <Base>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <ScrollView>
                        <View style={styles.content}>
                            <InputCore title="Nome completo" type='default' placeholder="Nome" onChangeText={(text) => inputText(text)} />
                            <InputCore title="Usuário ou Email" type='default' placeholder="Usuário ou Email" onChangeText={(text) => inputText(text)} />
                            <InputCore title="Telefone" type='default' placeholder="(XX) XXXXX-XXXX" onChangeText={(text) => inputText(text)} />
                            <InputCore title="Data de nacimento" type='default' placeholder="XX/XX/XXXX" onChangeText={(text) => inputText(text)} />
                            <Select title="Selecione uma frace e responda" options={options} onSelect={onSelectMessage} />
                            {message !== '' && <InputCore title="Resposta" />}
                            <InputCore title="Senha" type='default' secure={true} IconSecure={true} placeholder="********" onChangeText={(text) => inputText(text)} />
                            <InputCore title="Confirmação de Senha" type='default' secure={true} placeholder="********" IconSecure={true} onChangeText={(text) => inputText(text)} />
                            <View style={styles.action}>
                                <ButtonCore onPress={navigate} size="sm" variable="secondary">Voltar</ButtonCore>
                                <ButtonCore onPress={editUser} size="sm">Editar</ButtonCore>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Base>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40,
        paddingTop: 15
    },
    content: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        gap: 20,
        height: '100%',
        paddingBottom: 70
    },
    action: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 10,
        gap: 10,
        paddingBottom: 15
    }
});
