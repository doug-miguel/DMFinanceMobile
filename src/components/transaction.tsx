import { StyleSheet, View, Text } from "react-native";

import Separator from "./separator";
import { EntertainmentComponente, FoodComponente, GiftComponente, GroceryComponente, HousingComponente, MedicineComponente, OthersComponente, SavingsComponente, TransportComponente, WageComponente } from "@/assets/images/SvgComponent";
import { icons } from "@/utils/icons";
import { formatarData } from "@/utils/formatData";

interface TransactionProps {
    id: number;
    price: number;
    title: string;
    notes: string,
    category_id: number;
    user_id: 1,
    group_id: null | number,
    created_at: string;
}

export default function TransactionAction({ category_id, price, created_at, group_id, id, notes, title, user_id, }: TransactionProps) {
    return (
        <View style={styles.container}>
            <View style={styles.colorIcon}>
                {icons(category_id)}
            </View>
            <View style={styles.content}>
                <View style={styles.actionDate}>
                    <Text style={styles.action}>{title}</Text>
                    <Text style={styles.date}>{formatarData(created_at)}</Text>
                </View>
                <Separator color="#3B82F6" direction="vertical" />
                <View style={styles.actionDate}>
                    <Text style={styles.recurrenceTextDescrition}>Descrição</Text>
                    <Text style={styles.recurrenceText}>{notes}</Text>
                </View>
                <Separator color="#3B82F6" direction="vertical" />
                <View style={styles.actionDate}>
                    <Text style={[styles.operatorText, category_id === 1 && styles.blueText]}>R$ {category_id === 1 ? '' : '-'}{price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 24,
        maxWidth: '95%'
    },
    colorIcon: {
        backgroundColor: '#3B82F6',
        borderRadius: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '25%',
    },
    content: {
        flexDirection: 'row',
        gap: 10,
        maxWidth: '75%',
    },
    actionDate: {
        gap: 5,
        width: '33%',
        textAlign: 'center',
    },
    action: {
        fontSize: 16,
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
    recurrenceTextDescrition: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '600',
        textTransform: 'capitalize',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
        width: 70,
    },
    recurrenceText: {
        fontSize: 12,
        color: '#052224',
        fontWeight: '300',
        textTransform: 'capitalize',
        alignItems: 'center',
        textAlign: 'center',
        width: 70,
    },
    operatorText: {
        textAlign: 'center',
        justifyContent: 'flex-start',
        fontWeight: '500',
        fontSize: 15,
        color: '#ff0000',
    },
    blueText: {
        color: '#0068FF',
    }
});
