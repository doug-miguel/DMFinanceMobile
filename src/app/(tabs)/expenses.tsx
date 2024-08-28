import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, Text } from "react-native";

import Base from "@/components/base";
import Header from "@/components/header";
import InputCore from "@/components/inputs/input";
import ButtonCore from "@/components/buttons/button";
import { useFocusEffect, useRouter } from "expo-router";
import Select from "@/components/inputs/select";
import React from "react";
import { category } from "@/utils/category";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FormData {
    title: string,
    notes: string,
    price: number | string,
    category_id: number,
    user_group?: number
}

interface ValueProps {
    label: string;
    value: string | number
}

export default function Expenses() {
    const router = useRouter();
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean | null>(null);
    const [userGroup, setUserGroup] = React.useState<[]>([]);
    const [formData, setFormData] = React.useState<FormData>({
        title: '',
        notes: '',
        category_id: 0,
        price: '',
    });

    useFocusEffect(
        React.useCallback(() => {
            getUserGroup();
            setFormData({
                title: '',
                notes: '',
                category_id: 1,
                price: '',
            })
            onSelectCategory({ label: '', value: '' })
        }, [])
    );

    function onSelectCategory(id: ValueProps) {
        setFormData({ ...formData, category_id: Number(id.value) });
    }

    function inputText(field: keyof FormData, text: string | number) {
        setFormData({ ...formData, [field]: text });
    }

    async function getUserGroup() {
        const token = await AsyncStorage.getItem('@user_token');
        const fetchOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/usersgroups`, fetchOptions);
        const result = await response.json();
        setUserGroup(result);
    }

    async function create() {
        const token = await AsyncStorage.getItem('@user_token');
        const { title, category_id, notes, price } = formData;
        const number = price.toString().replace(',', '.');
        if (!title || !category_id || !notes || !price) {
            return Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
        }
        setLoading(true);
        const fetchOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                title, category_id, notes, price: Number(number)
            }),
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/expense/expensecreate`, fetchOptions);
        const result = await response.json();
        if (response.ok) {
            router.push('categories');
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
            <Header title='Adicionar despesa' back={true} />
            <Base>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <ScrollView style={styles.content}>
                        <View style={styles.inputs}>
                            <Select title="Categoria" options={category} onSelect={onSelectCategory} />
                            <InputCore title="Titulo" type='default' placeholder="Exemplo: Mercado" value={formData.title} onChangeText={(text) => inputText('title', text)} />
                            <InputCore title="Descrição" placeholder="Exemplo: Rossi" type="default" value={formData.notes} onChangeText={(text) => inputText('notes', text)} />
                            <InputCore title="Valor" placeholder="Valor: 0000,00" type="decimal-pad" value={formData.price.toString()} onChangeText={(text) => inputText('price', text)} />
                            {error && <Text style={styles.error}>{error}</Text>}
                            {userGroup.length > 0 &&
                                <Select title="Categoria" options={category} onSelect={onSelectCategory} />
                            }
                            <ButtonCore onPress={create} loading={loading}>Salvar</ButtonCore>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Base>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40,
        paddingTop: 15
    },
    content: {
        flex: 1,
        marginVertical: 'auto'
    },
    inputs: {
        gap: 30,
        width: '100%',
        alignItems: 'center'
    },
    textArea: {
        borderWidth: 1,
        textAlignVertical: 'top',
    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
});