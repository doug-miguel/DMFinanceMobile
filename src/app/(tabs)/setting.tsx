import BaseScroll from "@/components/baseScroll";
import ButtonCore from "@/components/buttons/button";
import Header from "@/components/header";
import InputCore from "@/components/inputs/input";
import Select from "@/components/inputs/select";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function SettingGroup() {
    const router = useRouter()
    function create() {
        router.push('user');
    }
    const options = ["", "Grupo do Douglas", "Grupo da Anna"];
    function select(option: any) {
        console.log("🚀 ~ select ~ option:", option)
    }
    function approve() { }
    function refuse() { }
    return (
        <View style={styles.container}>
            <Header title='Configurações de Grupo' back={true} />
            <BaseScroll>
                <View style={styles.contentGroup}>
                    <InputCore title="Nome do grupo" />
                    <InputCore title="Com quem você vai compartilhar suas despesas" />
                    <ButtonCore onPress={create} >Criar</ButtonCore>
                </View>
                <View style={styles.contentGroupSelect}>
                    <Select title="Grupos aguardando respostas" options={options} onSelect={select} />
                    <View style={styles.action}>
                        <ButtonCore size="sm" onPress={approve}>Aceitar</ButtonCore>
                        <ButtonCore size="sm" variable="secondary" onPress={refuse}>Recusar</ButtonCore>
                    </View>
                </View>
            </BaseScroll>
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
        gap: 20,
        alignItems: 'center'
    },
    contentGroupSelect: {
        marginTop: 50,
        gap: 20,
        alignItems: 'center'
    },
    action: {
        flexDirection: 'row',
        gap: 10,
    }
})