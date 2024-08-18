import { StyleSheet, View, Text } from "react-native";
import Separator from "./separator";
import { HousingComponente, SavingsComponente, WageComponente } from "@/assets/images/SvgComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { TransactionProps } from "@/types/transaction";
import { useFormattedReal } from "@/hooks/useFormattedReal";
import { useFocusEffect } from "expo-router";

export default function SpentDay() {
    const [dataCategory, setDataCategory] = React.useState<TransactionProps>();
    const [dataExpense, setDataExpense] = React.useState<TransactionProps>();

    useFocusEffect(
        React.useCallback(() => {
            getExpense();
            getExpenseCategory();
        }, [])
    );

    async function getExpenseCategory() {
        const token = await AsyncStorage.getItem('@user_token');
        const fetchOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/expense/expensesId?category=1&size=1`, fetchOptions);
        const result = await response.json();
        setDataCategory(result.expenses[0]);
    }

    async function getExpense() {
        const token = await AsyncStorage.getItem('@user_token');
        const fetchOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/expense/expensesId`, fetchOptions);
        const result = await response.json();
        const filterExpense = result.expenses.find((item: TransactionProps) => {
            return item.category_id !== 1;
        })
        setDataExpense(filterExpense);
    }

    const formattedAmount = useFormattedReal(dataCategory?.price || 0);
    const formattedAmountExpense = useFormattedReal(dataExpense?.price || 0);


    return (
        <View style={styles.container}>
            <View style={styles.goals}>
                <SavingsComponente />
                <Text style={styles.goalsText}>{`Economia \npara metas`}</Text>
            </View>
            <Separator />
            <View style={styles.movement}>
                <View style={styles.movementCard}>
                    <WageComponente width={30} height={30} />
                    <View style={styles.movementCardText}>
                        <Text style={styles.movementCardLabel}>Ultimo Salario</Text>
                        <Text style={styles.movementCardNumber}>{formattedAmount}</Text>
                    </View>
                </View>
                <Separator direction="horizontal" />
                <View style={styles.movementCard}>
                    <HousingComponente width={30} height={30} />
                    <View style={styles.movementCardText}>
                        <Text style={styles.movementCardLabel}>Ultimo Gasto</Text>
                        <Text style={styles.movementCardNumber}>{formattedAmountExpense}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B82F6',
        width: 357,
        height: 152,
        borderRadius: 31,
        paddingHorizontal: 38,
        paddingVertical: 22,
        flexDirection: 'row',
        gap: 18
    },
    goals: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flex: 1,
    },
    goalsText: {
        color: '#fff',
        textAlign: 'center',
    },
    movement: {
        flex: 2,
        justifyContent: 'space-between'
    },
    movementCard: {
        flexDirection: 'row',
        gap: 12
    },
    movementCardText: {
        gap: 5
    },
    movementCardLabel: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '400'
    },
    movementCardNumber: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700'
    },
})
