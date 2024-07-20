import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TransactionProps } from "@/types/transaction";
import ItemNotification from "./itemNotification";

interface ITransactions {
    Transactions: TransactionProps[];
}

export default function ListNotification({ Transactions }: ITransactions) {
    const groupTransactionsByMonth = () => {
        const groupedTransactions: { [key: string]: TransactionProps[] } = {};
        Transactions.forEach((transaction) => {
            const date = new Date(transaction.date);
            const monthYearKey = `${date.getMonth() + 1}-${date.getFullYear()}`;
            if (!groupedTransactions[monthYearKey]) {
                groupedTransactions[monthYearKey] = [];
            }
            groupedTransactions[monthYearKey].push(transaction);
        });

        return groupedTransactions;
    };

    const renderTransactionsByMonth = () => {
        const groupedTransactions = groupTransactionsByMonth();
        const sortedKeys = Object.keys(groupedTransactions).sort((a, b) => {
            const [monthA, yearA] = a.split('-').map(Number);
            const [monthB, yearB] = b.split('-').map(Number);
            if (yearA !== yearB) {
                return yearA - yearB;
            } else {
                return monthA - monthB;
            }
        });

        return sortedKeys.map((monthYearKey, index) => {
            const transactions = groupedTransactions[monthYearKey];
            const [month, year] = monthYearKey.split("-");
            const monthHeader = `${getMonthName(parseInt(month) - 1)} ${year}`;

            return (
                <View key={index}>
                    <Text style={{ fontSize: 20, fontWeight: '600', marginVertical: 10, color: '#1E40AF' }}>
                        {monthHeader}
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
        <ScrollView>
            {renderTransactionsByMonth()}
        </ScrollView>
    );
}
