import { FontAwesome6 } from "@expo/vector-icons";

import { StyleSheet, View, Text } from "react-native";

import Separator from "./separator";

interface TransactionProps {
    id: number,
    operation: string,
    date: string,
    svg?: string,
    recurrence: string | null,
    value: number,
    actionName: string
}

export default function TransactionAction({ operation, date, recurrence, value, actionName, svg }: TransactionProps) {
    function formatarData(dataString: string): string {
        const data = new Date(dataString);
        const hora = data.getHours().toString().padStart(2, '0');
        const minuto = data.getMinutes().toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero

        return `${hora}:${minuto} ${dia}/${mes}`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.colorIcon}>
                <FontAwesome6 name={svg} size={24} color="#FFF" />
            </View>
            <View style={styles.content}>
                <View style={styles.actionDate}>
                    <Text style={styles.action}>{actionName}</Text>
                    <Text style={styles.date}>{formatarData(date)}</Text>
                </View>
                <Separator color="#3B82F6" direction="vertical" />
                <Text style={styles.recurrenceText}>{recurrence}</Text>
                <Separator color="#3B82F6" direction="vertical" />
                <Text style={[styles.operatorText, operation === 'credito' && styles.blueText]}>R$ {operation === 'credito' ? '' : '-'}{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 24
    },
    colorIcon: {
        backgroundColor: '#3B82F6',
        borderRadius: 10,
        width: 50,
        padding: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 25
    },
    actionDate: {
        gap: 5,
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
    recurrenceText: {
        fontSize: 12,
        color: '#052224',
        fontWeight: '300',
        textTransform: 'capitalize',
        alignItems: 'center',
        textAlign: 'center',
        width: 45,
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
