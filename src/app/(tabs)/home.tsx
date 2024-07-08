import React from "react";

import { View, StyleSheet } from "react-native";

import Balance from "@/components/balance";
import Base from "@/components/base";
import Header from "@/components/header";
import SpentDay from "@/components/spentDay";
import ListTransaction from "@/components/listTransaction";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header title="Bem vindo a home!" />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <SpentDay />
                <ListTransaction />
            </Base>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40
    },
    content: {
        gap: 40
    },
});
