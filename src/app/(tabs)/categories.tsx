import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function CategoriesScreen() {
    return (
        <View>
            <Text>Categorias</Text>
            <Link href="/">Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
});
