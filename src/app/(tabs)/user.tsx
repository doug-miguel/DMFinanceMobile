import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function UserScreen() {
    return (
        <View>
            <Text>usuario</Text>
            <Link href="/">Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
});
