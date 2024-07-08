import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

export default function DetailsCategoriaScreen() {
    const route = useRoute();
    //@ts-ignore;
    const { id } = route.params;
    console.log("🚀 ~ DetailsCategoriaScreen ~ id:", id)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    );
};
