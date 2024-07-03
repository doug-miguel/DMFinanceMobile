import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
            <Link href="/">Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
});
