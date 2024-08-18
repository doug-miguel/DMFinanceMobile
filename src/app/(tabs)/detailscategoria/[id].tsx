import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Base from '@/components/base';
import ListTransaction from '@/components/listTransaction';
import Header from '@/components/header';
import ButtonCore from '@/components/buttons/button';
import { useRouter } from 'expo-router';
import Balance from '@/components/balance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { category } from '@/utils/category';
import Loading from '@/components/loading';

export default function DetailsCategoriaScreen() {
    const [loading, setLoading] = React.useState<boolean>();
    const route = useRoute();
    const router = useRouter();
    //@ts-ignore;
    const { id } = route.params;

    const [data, setData] = React.useState();
    React.useEffect(() => {
        getExpense();
    }, [id])

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
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/expense/expensesId?category=${id}&size=50`, fetchOptions);
        const result = await response.json();
        setData(result.expenses);
        setLoading(false);
    }

    function AddExpenses() {
        router.push('expenses')
    }

    return (
        <View style={styles.container}>
            <Header title={category[id].name} back={true} />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <ButtonCore onPress={AddExpenses}>Add despesa</ButtonCore>
                {loading &&
                    <Loading />
                }
                {data &&
                    <ListTransaction Transactions={data} />
                }
            </Base>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40
    },
    content: {
        paddingTop: 20,
        gap: 10
    },
});