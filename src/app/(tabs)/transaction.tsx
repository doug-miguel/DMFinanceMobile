import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function TransactionScreen() {
    return (
        <View>
            <Text>Transação</Text>
            <Link href="/">Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
});
