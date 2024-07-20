import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { TransactionProps } from "@/types/transaction";
import ItemNotification from "./itemNotification";

interface ITransactions {
    Transactions: TransactionProps[];
}

export default function ListNotification({ Transactions }: ITransactions) {
    const groupTransactionsByDay = () => {
        const groupedTransactions: { [key: string]: TransactionProps[] } = {};
        Transactions.forEach((transaction) => {
            const date = new Date(transaction.date);
            const dayMonthYearKey = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            if (!groupedTransactions[dayMonthYearKey]) {
                groupedTransactions[dayMonthYearKey] = [];
            }
            groupedTransactions[dayMonthYearKey].push(transaction);
        });

        return groupedTransactions;
    };

    const renderTransactionsByDay = () => {
        const groupedTransactions = groupTransactionsByDay();
        const sortedKeys = Object.keys(groupedTransactions).sort((a, b) => {
            const [dayA, monthA, yearA] = a.split('-').map(Number);
            const [dayB, monthB, yearB] = b.split('-').map(Number);
            if (yearA !== yearB) {
                return yearA - yearB;
            } else if (monthA !== monthB) {
                return monthA - monthB;
            } else {
                return dayA - dayB;
            }
        }).reverse();

        return sortedKeys.map((dayMonthYearKey, index) => {
            const transactions = groupedTransactions[dayMonthYearKey];
            const [day, month, year] = dayMonthYearKey.split("-");
            const dayHeader = `${day} de ${getMonthName(parseInt(month) - 1)} de ${year}`;

            return (
                <View key={index}>
                    <Text style={{ fontSize: 20, fontWeight: '600', marginVertical: 10, color: '#1E40AF' }}>
                        {dayHeader}
                    </Text>
                    {transactions.map((transaction, idx) => (
                        <ItemNotification key={idx} date={transaction.date} svg={transaction.svg} actionName={transaction.actionName} />
                    ))}
                </View>
            );
        });
    };

    const getMonthName = (monthIndex: number) => {
        const months = [
            "Janeiro", "Fevereiro", "Março", "Abril",
            "Maio", "Junho", "Julho", "Agosto",
            "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return months[monthIndex];
    };

    return (
        <ScrollView style={styles.container}>
            {renderTransactionsByDay()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40
    },
});
