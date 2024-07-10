import { StyleSheet, View } from "react-native";

import Base from "@/components/base";
import Header from "@/components/header";
import InputCore from "@/components/inputs/input";
import ButtonCore from "@/components/buttons/button";
import { useRouter } from "expo-router";

export default function Expenses() {
    const router = useRouter();
    function create() { router.push('categories') }
    return (
        <View style={styles.container}>
            <Header title='Adicionar despesa' back={true} />
            <Base style={styles.content}>
                <View style={styles.inputs}>
                    <InputCore title="Data" placeholder="XX/XX/XXXX" type="default" />
                    <InputCore title="Categoria" />
                    <InputCore title="Valor" placeholder="XXX,XX" type="numeric" />
                    <InputCore title="Nome da despesa" placeholder="Exemplo: Rossi" type="default" />
                </View>
                <ButtonCore onPress={create}>Salvar</ButtonCore>
            </Base>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40,
    },
    content: {
        paddingTop: 40,
        gap: 50,
    },
    inputs: {
        gap: 34
    },
    textArea: {
        borderWidth: 1,
        textAlignVertical: 'top',
    },
});