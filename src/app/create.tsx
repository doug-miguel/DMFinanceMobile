import ButtonCore from "@/components/buttons/button";
import { useRouter } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function CreateScreen() {
    const router = useRouter();

    function navigate() {
        router.push('/')
    }

    return (
        <View style={styles.content}>
            <ButtonCore onPress={navigate}>Voltar</ButtonCore>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});
