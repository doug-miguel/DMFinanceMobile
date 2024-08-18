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
                    category_id={transaction?.category_id}
                    price={transaction.price}
                    title={transaction.title}
                    notes={transaction.notes}
                    user_id={transaction.user_id}
                    group_id={transaction.group_id}
                    created_at={transaction.created_at} />
            ))}
        </View>
    )
}