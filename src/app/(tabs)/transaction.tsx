import Balance from "@/components/balance";
import Base from "@/components/base";
import Header from "@/components/header";
import ListTransaction from "@/components/listTransaction";
import { ListtransactionArray } from "@/model/transacionModel";
import { View, StyleSheet, Text } from "react-native";

export default function TransactionScreen() {
    return (
        <View style={styles.container}>
            <Header title="Transação" back={true} />
            <View style={styles.balance}>
                <Text style={styles.title}>Valor necessario</Text>
                <Text style={styles.value}>R$ 5000</Text>
            </View>
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <ListTransaction Transactions={ListtransactionArray} />
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
    balance: {
        backgroundColor: '#fff',
        width: '80%',
        height: 75,
        marginHorizontal: 'auto',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#1E40AF',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    value: {
        color: '#1E40AF',
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    content: {
        paddingTop: 20
    }
});
