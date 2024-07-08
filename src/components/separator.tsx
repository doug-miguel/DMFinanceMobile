import { View } from "react-native";

interface SeparetorPros {
    direction?: 'vertical' | 'horizontal';
    color?: string;
}

export default function Separator({ direction = 'vertical', color = '#fff' }: SeparetorPros) {
    const separatorStyle =
        direction === 'vertical'
            ? { borderLeftColor: color, borderLeftWidth: 1, marginVertical: 1 }
            : { borderTopColor: color, borderTopWidth: 1, marginVertical: 1 };
    return (
        <View style={separatorStyle} />
    )
}