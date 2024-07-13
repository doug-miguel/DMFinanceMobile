import { View } from "react-native";
import TransactionAction from "./transaction";
import { TransactionProps } from "@/types/transaction";

interface ITransactions {
    Transactions: TransactionProps[],
}

export default function ListTransactionHome({ Transactions }: ITransactions) {
    return (
        <View >
            {Transactions.map((transaction: TransactionProps, index: number) => (
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