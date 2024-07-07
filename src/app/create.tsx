import ButtonCore from "@/components/buttons/button";
import InputCore from "@/components/inputs/input";
import { useRouter } from "expo-router";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

export default function CreateScreen() {
    const router = useRouter();

    function inputText(text: string) {
        console.log("🚀 ~ inputText ~ text:", text)
    }

    function navigate() {
        router.push('/')
    }

    function create() {
        console.log('create')
        router.push('/')
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Criar conta!</Text>
                <View style={styles.content}>
                    <InputCore title="Nome completo" type='default' onChangeText={(text) => inputText(text)} />
                    <InputCore title="Usuário ou Email" type='default' onChangeText={(text) => inputText(text)} />
                    <InputCore title="Telefone" type='default' onChangeText={(text) => inputText(text)} />
                    <InputCore title="Data de nacimento" type='default' onChangeText={(text) => inputText(text)} />
                    <InputCore title="Senha" type='default' secure={true} IconSecure={true} onChangeText={(text) => inputText(text)} />
                    <InputCore title="Confirmação de Senha" type='default' secure={true} IconSecure={true} onChangeText={(text) => inputText(text)} />
                    <View style={styles.action}>
                        <ButtonCore onPress={navigate} size="sm" variable="secondary">Voltar</ButtonCore>
                        <ButtonCore onPress={create} size="sm">Criar</ButtonCore>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -50
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
    content: {
        flex: 1,
        backgroundColor: "#fff",
        height: 745,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 25,
        gap: 20,
    },
    action: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 10,
        gap: 10
    }
});
