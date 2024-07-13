import { StyleSheet, View, Text } from "react-native";
import Separator from "./separator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HousingComponente, SavingsComponente, WageComponente } from "@/assets/images/SvgComponent";

export default function SpentDay() {
    return (
        <View style={styles.container}>
            <View style={styles.goals}>
                <SavingsComponente />
                <Text style={styles.goalsText}>{`Economia \npara metas`}</Text>
            </View>
            <Separator />
            <View style={styles.movement}>
                <View style={styles.movementCard}>
                    <WageComponente width={30} height={30} />
                    <View style={styles.movementCardText}>
                        <Text style={styles.movementCardLabel}>Ultimo Salario</Text>
                        <Text style={styles.movementCardNumber}>R$10.000.00</Text>
                    </View>
                </View>
                <Separator direction="horizontal" />
                <View style={styles.movementCard}>
                    <HousingComponente width={30} height={30} />
                    <View style={styles.movementCardText}>
                        <Text style={styles.movementCardLabel}>Ultimo Gasto</Text>
                        <Text style={styles.movementCardNumber}>R$1.200,00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B82F6',
        width: 357,
        height: 152,
        borderRadius: 31,
        paddingHorizontal: 38,
        paddingVertical: 22,
        flexDirection: 'row',
        gap: 18
    },
    goals: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flex: 1,
    },
    goalsText: {
        color: '#fff',
        textAlign: 'center',
    },
    movement: {
        flex: 2,
        justifyContent: 'space-between'
    },
    movementCard: {
        flexDirection: 'row',
        gap: 12
    },
    movementCardText: {
        gap: 5
    },
    movementCardLabel: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '400'
    },
    movementCardNumber: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700'
    },
})
