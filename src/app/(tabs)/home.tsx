import React from "react";

import { View, StyleSheet } from "react-native";

import Balance from "@/components/balance";
import Base from "@/components/base";
import Header from "@/components/header";
import SpentDay from "@/components/spentDay";
import ListTransactionHome from "@/components/listTransactionHome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "@/components/loading";
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
    const [loading, setLoading] = React.useState<boolean>();
    const [data, setData] = React.useState();

    useFocusEffect(
        React.useCallback(() => {
            getExpense();
        }, [])
    );

    async function getExpense() {
        setLoading(true);
        const token = await AsyncStorage.getItem('@user_token');
        const fetchOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/expense/expensesId?size=4`, fetchOptions);
        const result = await response.json();
        setData(result.expenses);
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Header title="Bem vindo a inicio!" />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <SpentDay />
                {loading && <Loading />}
                {data && <ListTransactionHome Transactions={data} />}
            </Base>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40,
        paddingTop: 15
    },
    content: {
        gap: 40
    },
});
