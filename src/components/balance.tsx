import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface IBalance {
    amount: number,
    amountSpent: number

}

export default function Balance({ amount, amountSpent }: IBalance) {
    const [width, setWidth] = React.useState<any>();

    React.useEffect(() => {
        const percentualGasto = (amountSpent / amount) * 100;
        let valueClear
        if (percentualGasto <= 100)
            valueClear = `${parseFloat(percentualGasto.toFixed(0))}%`;
        else valueClear = '100%'
        setWidth(valueClear);

    }, [amount, amountSpent])

    return (
        <View style={styles.container}>
            <View style={styles.containerBalance}>
                <View style={styles.contentBalance}>
                    <Text style={styles.balanceText}>Valor Recebido</Text>
                    <Text style={styles.balanceNumber}>R$ {amount}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.contentBalance}>
                    <Text style={styles.balanceText}>Valor Gasto</Text>
                    <Text style={styles.balanceNumber}>R$ {amountSpent}</Text>
                </View>
            </View>
            <View style={styles.containerProgressBar}>
                <Text style={styles.containerProgressBarText}>{width}</Text>
                <View style={[styles.progressBar, { width }]}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 12
    },
    containerBalance: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
        width: '65%',
        justifyContent: 'space-between'
    },
    contentBalance: {
        gap: 5
    },
    balanceText: {
        color: '#1B1B3A',
        fontSize: 12,
        fontWeight: '400',
        textTransform: 'capitalize'
    },
    balanceNumber: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'capitalize'
    },
    separator: {
        borderLeftColor: '#FFF',
        borderLeftWidth: 1,
        marginVertical: 1,
    },
    containerProgressBar: {
        width: 330,
        height: 20,
        backgroundColor: '#052224',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 'auto',
        position: 'relative'
    },
    progressBar: {
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
    },
    containerProgressBarText: {
        color: '#3B82F6',
        position: 'absolute',
        top: 2,
        right: 2,
        zIndex: 1
    }
});
