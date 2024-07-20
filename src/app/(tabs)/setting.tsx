import Base from "@/components/base";
import ButtonCore from "@/components/buttons/button";
import Header from "@/components/header";
import InputCore from "@/components/inputs/input";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function SettingGroup() {
    const router = useRouter()
    function create() {
        router.push('user');
    }
    return (
        <View style={styles.container}>
            <Header title='Configurações de Grupo' back={true} />
            <Base style={styles.contentGroup}>
                <InputCore title="Nome do grupo" />
                <InputCore title="Com quem você vai compartilhar suas despesas" />
                <ButtonCore onPress={create} >Criar</ButtonCore>
            </Base>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40,
        paddingTop: 15,
    },
    contentGroup: {
        flex: 1,
        gap: 20,
    }
})