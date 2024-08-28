import React from 'react';
import { View, StyleSheet } from 'react-native';
import Balance from '@/components/balance';
import Base from '@/components/base';
import Header from '@/components/header';
import ItemCategoria from '@/components/itemCategoria';
import { useRouter } from 'expo-router';
import { category } from '@/utils/category';
import ButtonCore from '@/components/buttons/button';

export default function CategoriesScreen() {
    const router = useRouter()

    const detailsCategory = (value: number) => {
        router.navigate(`detailscategoria/${value}`);
    };

    function AddExpenses() {
        router.push('expenses')
    }

    return (
        <View style={styles.container}>
            <Header title="Categorias" back={true} />
            <Balance amount={7000} amountSpent={3500} />
            <ButtonCore onPress={AddExpenses} variable="secondary">Add despesa</ButtonCore>
            <Base style={styles.content}>
                <View style={styles.item}>
                    {category.map((item, index) => (
                        <ItemCategoria
                            key={index}
                            onPress={() => detailsCategory(item.value)}
                            icon={item.label}
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
        alignItems: 'center',
        backgroundColor: '#3B82F6',
        gap: 20,
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
