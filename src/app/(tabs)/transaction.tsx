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
        gap: 40
    },
    content: {
        paddingTop: 20
    }
});
