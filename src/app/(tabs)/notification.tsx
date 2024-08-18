import BaseScroll from "@/components/baseScroll";
import Header from "@/components/header";
import ListNotification from "@/components/listNotification";
import { StyleSheet, View } from "react-native";

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "@/components/loading";
import { useFocusEffect } from "expo-router";

export default function NotificationPage() {
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
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/expense/expensesId?size=50`, fetchOptions);
        const result = await response.json();
        setData(result.expenses);
        setLoading(false);
    }
    return (
        <View style={styles.container}>
            <Header title='Notificação' back={true} />
            <BaseScroll>
                {loading && <Loading />}
                {data && <ListNotification Transactions={data} />}
            </BaseScroll>
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
});