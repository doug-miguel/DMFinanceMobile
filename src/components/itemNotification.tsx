import { WageComponente, FoodComponente, TransportComponente, MedicineComponente, GroceryComponente, HousingComponente, GiftComponente, SavingsComponente, EntertainmentComponente, OthersComponente } from "@/assets/images/SvgComponent";
import { StyleSheet, View, Text } from "react-native";

interface TransactionProps {
    date: string,
    svg: string,
    actionName: string
}

export default function ItemNotification({ svg, actionName, date }: TransactionProps) {
    function formatarData(dataString: string): string {
        const data = new Date(dataString);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        return `${dia}/${mes}`;
    }

    function icons() {
        if (svg === 'Salario') return <WageComponente width={30} height={30} />
        if (svg === 'Comida') return <FoodComponente width={30} height={30} />
        if (svg === 'Transporte') return <TransportComponente width={30} height={30} />
        if (svg === 'Medicamento') return <MedicineComponente width={30} height={30} />
        if (svg === 'Mercado') return <GroceryComponente width={30} height={30} />
        if (svg === 'Moradia') return <HousingComponente width={30} height={30} />
        if (svg === 'Presente') return <GiftComponente width={30} height={30} />
        if (svg === 'Poupança') return <SavingsComponente width={30} height={30} />
        if (svg === 'Entreterimento') return <EntertainmentComponente width={30} height={30} />
        if (svg === 'Outros') return <OthersComponente width={30} height={30} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.colorIcon}>
                {icons()}
            </View>
            <View style={styles.content}>
                <View style={styles.actionDate}>
                    <Text style={styles.action}>{actionName}</Text>
                    <Text style={styles.action}>Descrição do que foi gasto</Text>
                </View>
                <Text style={styles.date}>{formatarData(date)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 24,
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