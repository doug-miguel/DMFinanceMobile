import { EntertainmentComponente, FoodComponente, GiftComponente, GroceryComponente, HousingComponente, MedicineComponente, OthersComponente, SavingsComponente, TransportComponente } from "@/assets/images/SvgComponent";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

interface ItemCategoriProps {
    icon: any;
    onPress: () => void;
}

export default function ItemCategoria({ icon, onPress }: ItemCategoriProps) {
    function icons() {
        if (icon === 'Comida') return <FoodComponente />
        if (icon === 'Transporte') return <TransportComponente />
        if (icon === 'Medicamento') return <MedicineComponente />
        if (icon === 'Mercado') return <GroceryComponente />
        if (icon === 'Moradia') return <HousingComponente />
        if (icon === 'Presente') return <GiftComponente />
        if (icon === 'Poupança') return <SavingsComponente />
        if (icon === 'Entreterimento') return <EntertainmentComponente />
        if (icon === 'Outros') return <OthersComponente />
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.containerBtn}>
                {icons()}
            </TouchableOpacity>
            <Text style={styles.text}>{icon}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    containerBtn: {
        backgroundColor: '#3B82F6',
        width: 105,
        height: 105,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        color: '#1E40AF'
    },
});