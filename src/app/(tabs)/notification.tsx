import BaseScroll from "@/components/baseScroll";
import Header from "@/components/header";
import ListNotification from "@/components/listNotification";
import { StyleSheet, View } from "react-native";

import { ListtransactionArray } from "@/model/transacionModel";

export default function NotificationPage() {
    return (
        <View style={styles.container}>
            <Header title='Notificação' back={true} />
            <BaseScroll>
                <ListNotification Transactions={ListtransactionArray} />
            </BaseScroll>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        gap: 40,
        paddingTop: 15
    },
});