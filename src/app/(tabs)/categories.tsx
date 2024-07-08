import { View, StyleSheet, Text } from "react-native";

import Balance from "@/components/balance";
import Base from "@/components/base";
import Header from "@/components/header";
import ItemCategoria from "@/components/itemCategoria";

export default function CategoriesScreen() {
    const categori = [
        'Comida',
        'Transporte',
        'Medicamento',
        'Mercado',
        'Moradia',
        'Presente',
        'Poupança',
        'Entreterimento',
        'Outros'
    ]

    return (
        <View style={styles.container}>
            <Header title="Categorias" back={true} />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <View style={styles.item}>
                    {categori.map((item, index) => (
                        <ItemCategoria key={index} icon={item} />
                    ))}
                </View>
            </Base>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40
    },
    content: {
        paddingTop: 45
    },
    item: {
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
