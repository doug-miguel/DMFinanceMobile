import ButtonCore from "@/components/buttons/button";
import InputCore from "@/components/inputs/input";
import Select from "@/components/inputs/select";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import { parse, formatISO } from 'date-fns';
import { options } from "@/hooks/options";

interface FormData {
    full_name: string;
    username: string;
    email: string;
    phone: string;
    birthday: string;
    password: string;
    passwordconfirm: string;
    security_question: string;
    security_response: string;
}

interface ValueProps {
    label: string;
    value: string | number
}

export default function CreateScreen() {
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean | null>(null);
    const [formData, setFormData] = React.useState<FormData>({
        full_name: '',
        username: '',
        email: '',
        phone: '',
        birthday: '',
        password: '',
        passwordconfirm: '',
        security_question: '',
        security_response: ''
    });
    const router = useRouter();

    function onSelectMessage(mes: ValueProps) {
        setFormData({ ...formData, security_question: mes.value.toString() });
    }

    function inputText(field: keyof FormData, text: string) {
        setFormData({ ...formData, [field]: text });
    }

    function navigate() {
        router.push('/');
    }

    async function create() {
        const { full_name, username, email, phone, birthday, password, passwordconfirm, security_question, security_response } = formData;
        if (!full_name || !username || !email || !phone || !birthday || !password || !passwordconfirm || (security_question && !security_response)) {
            return Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
        }

        if (password !== passwordconfirm) {
            return Alert.alert("Erro", "As senhas não coincidem.");
        }

        const [day, month, year] = birthday.split('/');
        const parsedDate = parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date());
        const formattedBirthday = formatISO(parsedDate);

        setLoading(true);
        const fetchOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name,
                username,
                email,
                phone,
                birthday: formattedBirthday,
                password,
                security_question,
                security_response
            }),
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/user/create`, fetchOptions);
        const result = await response.json();
        if (response.ok) {
            router.push('/');
            setError(null);
        } else {
            setLoading(null);
            return setError(result.message);
        }
        setLoading(null);
        setError(null);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Criar conta!</Text>
                <View style={styles.content}>
                    <InputCore title="Nome completo" type='default' placeholder="Nome" onChangeText={(text) => inputText('full_name', text)} />
                    <InputCore title="Nome de usuário" type='default' placeholder="Usuário" onChangeText={(text) => inputText('username', text)} />
                    <InputCore title="Email" type='default' placeholder="Email" onChangeText={(text) => inputText('email', text)} />
                    <InputCore title="Telefone" type='phone-pad' placeholder="(XX) XXXXX-XXXX" mask="(99) 99999-9999" onChangeText={(text) => inputText('phone', text)} />
                    <InputCore title="Data de nascimento" type='phone-pad' placeholder="XX/XX/XXXX" mask="99/99/9999" onChangeText={(text) => inputText('birthday', text)} />
                    <Select title="Selecione uma frase e responda" options={options} onSelect={onSelectMessage} />
                    {formData.security_question !== '' && <InputCore title="Resposta" onChangeText={(text) => inputText('security_response', text)} />}
                    <InputCore title="Senha" type='default' secure={true} IconSecure={true} placeholder="********" onChangeText={(text) => inputText('password', text)} />
                    <InputCore title="Confirmação de Senha" type='default' secure={true} placeholder="********" IconSecure={true} onChangeText={(text) => inputText('passwordconfirm', text)} />
                    {error && <Text style={styles.error}>{error}</Text>}
                    <View style={styles.action}>
                        <ButtonCore onPress={navigate} size="sm" variable="secondary">Voltar</ButtonCore>
                        <ButtonCore onPress={create} size="sm" loading={loading}>
                            Criar
                        </ButtonCore>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -50,
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
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 25,
        gap: 20,
        height: '100%',
        paddingBottom: 50
    },
    action: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 10,
        gap: 10
    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
});
