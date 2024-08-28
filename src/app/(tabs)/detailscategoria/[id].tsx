import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Base from '@/components/base';
import ListTransaction from '@/components/listTransaction';
import Header from '@/components/header';
import { useRouter } from 'expo-router';
import Balance from '@/components/balance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { category } from '@/utils/category';
import Loading from '@/components/loading';

export default function DetailsCategoriaScreen() {
    const [loading, setLoading] = React.useState<boolean>();
    const route = useRoute();
    //@ts-ignore;
    const { id } = route.params;

    const [data, setData] = React.useState<[]>();
    const [labelId, setLabelId] = React.useState(0);

    React.useEffect(() => {
        setData([]);
        getExpense();
        setLabelId(id - 1)
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

    return (
        <View style={styles.container}>
            <Header title={category[labelId].label} back={true} />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                {loading &&
                    <Loading />
                }
                {data && data?.length > 0 &&
                    <ListTransaction Transactions={data} />
                }
                {data && data?.length === 0 &&
                    <Text style={styles.noContent}>Não a despesas...</Text>
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
    noContent: {
        color: '#000',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginVertical: 80
    }
});