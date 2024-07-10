import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Base from '@/components/base';
import ListTransaction from '@/components/listTransaction';
import { ListtransactionArray } from '@/model/transacionModel';
import Header from '@/components/header';
import ButtonCore from '@/components/buttons/button';
import { useRouter } from 'expo-router';
import Balance from '@/components/balance';

export default function DetailsCategoriaScreen() {
    const route = useRoute();
    const router = useRouter();
    //@ts-ignore;
    const { id } = route.params;

    function AddExpenses() {
        router.push('expenses')
    }

    return (
        <View style={styles.container}>
            <Header title={id} back={true} />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <ButtonCore onPress={AddExpenses}>Add despesa</ButtonCore>
                <ListTransaction Transactions={ListtransactionArray} />
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