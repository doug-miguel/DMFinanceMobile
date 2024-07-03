import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Layout() {
    return (
        <SafeAreaView style={styled.container}>
            <Slot></Slot>
        </SafeAreaView>
    )
}

const styled = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        paddingTop: 30,
    }
})