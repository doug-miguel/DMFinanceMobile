import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function DashboardScreen() {
    return (
        <View>
            <Text>DashboardScreen</Text>
            <Link href="/">Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
});
