import { View } from "react-native";
import TransactionAction from "./transaction";

export default function ListTransaction() {
    const ListtransactionArray = [
        {
            id: 1,
            operation: 'credito',
            date: '2024-07-07T10:30:00Z',
            recurrence: 'Mensal',
            svg: 'money-check-dollar',
            value: 7000,
            actionName: 'Salario'
        },
        {
            id: 2,
            operation: 'debito',
            date: '2024-07-09T10:30:00Z',
            recurrence: 'Semanal',
            svg: 'store',
            value: 120,
            actionName: 'Mercado'
        },
        {
            id: 3,
            operation: 'debito',
            date: '2024-07-8T10:30:00Z',
            recurrence: 'Nunca',
            svg: 'hospital',
            value: 50,
            actionName: 'Farmacia'
        },
        {
            id: 4,
            operation: 'debito',
            date: '2024-07-07T10:30:00Z',
            recurrence: 'Mensal',
            svg: 'house',
            value: 1200,
            actionName: 'Aluguel'
        },
    ]

    return (
        <View >
            {ListtransactionArray.map((transaction, index) => (
                <TransactionAction
                    key={index}
                    id={transaction.id}
                    svg={transaction?.svg}
                    operation={transaction.operation}
                    date={transaction.date}
                    recurrence={transaction.recurrence}
                    value={transaction.value}
                    actionName={transaction.actionName}
                />
            ))}
        </View>
    )
}