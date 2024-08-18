import BaseScroll from "@/components/baseScroll";
import ButtonCore from "@/components/buttons/button";
import InputCore from "@/components/inputs/input";
import Select from "@/components/inputs/select";
import { options } from "@/hooks/options";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

interface FormData {
    email: string;
    security_question: string;
    security_response: string;
}

interface FormDataPassword {
    password: string;
    passwordconfirm: string;
}

export default function ResetScreen() {
    const [reset, setReset] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [token, setToken] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean | null>();
    const [formData, setFormData] = React.useState<FormData>({
        email: '',
        security_question: '',
        security_response: ''
    });

    const [formDataPassword, setFormDataPassword] = React.useState<FormDataPassword>({
        password: '',
        passwordconfirm: '',
    });

    const router = useRouter();

    function navigate() {
        router.push('/')
    }

    function onSelectMessage(mes: string) {
        setFormData({ ...formData, security_question: mes });
    }

    function inputText(field: keyof FormData, text: string) {
        setFormData({ ...formData, [field]: text });
    }

    function inputTextPassword(field: keyof FormDataPassword, text: string) {
        setFormDataPassword({ ...formDataPassword, [field]: text });
    }

    async function ValidateRequestResponse() {
        const { email, security_question, security_response } = formData;
        if (!email || (security_question && !security_response)) {
            return Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
        }

        setLoading(true);
        const fetchOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                security_question,
                security_response
            }),
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/auth/validatereq`, fetchOptions);
        const result = await response.json();
        if (response.ok) {
            setToken(result.token);
            setReset(true);
            setError(null);
        } else {
            setLoading(null);
            return setError(result.message);
        }
        setLoading(null);
        setError(null);
    }

    async function updatePassword() {
        const { password, passwordconfirm, } = formDataPassword;
        if (password !== passwordconfirm) {
            return Alert.alert("Erro", "As senhas não coincidem.");
        }

        setLoading(true);
        const fetchOptions: RequestInit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                password,
            }),
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/user/update`, fetchOptions);
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
        <View style={styles.container}>
            <Text style={styles.text}>Recuperar senha!</Text>
            <BaseScroll>
                <Text style={styles.textBase}>Redefinir senha!</Text>
                {!reset &&
                    <View style={styles.response}>
                        <InputCore title="Email" type='default' placeholder="Email" onChangeText={(text) => inputText('email', text)} />
                        <Select title="Selecione uma frace e responda" options={options} onSelect={onSelectMessage} />
                        <InputCore title="Resposta" onChangeText={(text) => inputText('security_response', text)} />
                        {error && <Text style={styles.error}>{error}</Text>}
                        <ButtonCore onPress={ValidateRequestResponse}>Proxima etapa</ButtonCore>
                        <ButtonCore onPress={navigate} variable="secondary">Cancelar</ButtonCore>
                    </View>
                }
                {reset &&
                    <View style={styles.response}>
                        <InputCore title="Senha" type='default' secure={true} IconSecure={true} placeholder="********" onChangeText={(text) => inputTextPassword('password', text)} />
                        <InputCore title="Confirmação de Senha" type='default' secure={true} placeholder="********" IconSecure={true} onChangeText={(text) => inputTextPassword('passwordconfirm', text)} />
                        <ButtonCore onPress={updatePassword} disabled={loading}>
                            {loading ? 'Atualizando...' : 'Atualizar'}
                        </ButtonCore>
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
    error: {
        textAlign: 'center',
        color: 'red'
    }
});
