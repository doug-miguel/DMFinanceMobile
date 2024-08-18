import { formatarData } from "@/utils/formatData";
import { icons } from "@/utils/icons";
import { StyleSheet, View, Text } from "react-native";

interface TransactionProps {
    created_at: string,
    category_id: number,
    title: string,
    notes: string,
}

export default function ItemNotification({ category_id, title, created_at, notes }: TransactionProps) {
    return (
        <View style={styles.container}>
            <View style={styles.colorIcon}>
                {icons(category_id)}
            </View>
            <View style={styles.content}>
                <View style={styles.actionDate}>
                    <Text style={styles.action}>{title}</Text>
                    <Text style={styles.action}>{notes}</Text>
                </View>
                <Text style={styles.date}>{formatarData(created_at)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 24,
        marginHorizontal: 'auto',
    },
    colorIcon: {
        backgroundColor: '#3B82F6',
        borderRadius: 10,
        width: 50,
        padding: 10,
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 'auto',
        minWidth: '75%',
        gap: 25,
    },
    actionDate: {
        gap: 5,
        height: '100%',
    },
    action: {
        fontSize: 15,
        color: '#052224',
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    date: {
        fontSize: 12,
        color: '#0068FF',
        fontWeight: '600',
        textTransform: 'capitalize',
    },
});