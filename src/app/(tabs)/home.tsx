import React from "react";

import { View, StyleSheet } from "react-native";

import Balance from "@/components/balance";
import Base from "@/components/base";
import Header from "@/components/header";
import SpentDay from "@/components/spentDay";
import ListTransactionHome from "@/components/listTransactionHome";

import { ListtransactionArrayHome } from "@/model/transacionModel";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header title="Bem vindo a inicio!" />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <SpentDay />
                <ListTransactionHome Transactions={ListtransactionArrayHome} />
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
