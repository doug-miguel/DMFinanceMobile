import React from 'react';
import { View, StyleSheet } from 'react-native';
import Balance from '@/components/balance';
import Base from '@/components/base';
import Header from '@/components/header';
import ItemCategoria from '@/components/itemCategoria';
import { useRouter } from 'expo-router';

export default function CategoriesScreen() {
    const router = useRouter()
    const categori = [
        'Salario',
        'Comida',
        'Transporte',
        'Medicamento',
        'Mercado',
        'Moradia',
        'Poupança',
        'Entreterimento',
        'Outros',
    ];

    const detailsCategory = (id: string) => {
        router.navigate(`detailscategoria/${id}`);
    };

    return (
        <View style={styles.container}>
            <Header title="Categorias" back={true} />
            <Balance amount={7000} amountSpent={3500} />
            <Base style={styles.content}>
                <View style={styles.item}>
                    {categori.map((item, index) => (
                        <ItemCategoria
                            key={index}
                            onPress={() => detailsCategory(item)}
                            icon={item}
                        />
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
        gap: 40,
        paddingTop: 15
    },
    content: {
        paddingTop: 45,
    },
    item: {
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
