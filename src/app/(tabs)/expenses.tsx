import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";

import Base from "@/components/base";
import Header from "@/components/header";
import InputCore from "@/components/inputs/input";
import ButtonCore from "@/components/buttons/button";
import { useRouter } from "expo-router";
import Select from "@/components/inputs/select";

export default function Expenses() {
    const router = useRouter();
    const options = ["", "Salario", "Comida", "Transporte", "Medicamento", "Mercado", "Moradia", "Presente", "Poupança", "Entreterimento", "Outros"];
    function create() { router.push('categories') }
    function select(option: any) {
        console.log("🚀 ~ select ~ option:", option)
    }
    return (
        <View style={styles.container}>
            <Header title='Adicionar despesa' back={true} />
            <Base>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <ScrollView style={styles.content}>
                        <View style={styles.inputs}>
                            <Select title="Categoria" options={options} onSelect={select} />
                            <InputCore title="Data" placeholder="XX/XX/XXXX" type="default" />
                            <InputCore title="Valor" placeholder="XXX,XX" type="numeric" />
                            <InputCore title="Nome da despesa" placeholder="Exemplo: Rossi" type="default" />
                            <ButtonCore onPress={create}>Salvar</ButtonCore>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
        flex: 1,
        marginVertical: 'auto'
    },
    inputs: {
        gap: 30,
        width: '100%',
        alignItems: 'center'
    },
    textArea: {
        borderWidth: 1,
        textAlignVertical: 'top',
    },
});