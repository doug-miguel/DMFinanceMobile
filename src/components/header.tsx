import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
interface IHeader {
    back?: boolean,
    title: string
}

export default function Header({ back = false, title }: IHeader) {
    const [notification, setNotification] = React.useState(1);
    const navigation = useNavigation();
    const router = useRouter();

    function backRouter() {
        navigation.goBack()
    }

    function notificationRouter() {
        router.push('notification')
    }

    return (
        <View style={styles.header}>
            <View style={styles.content}>
                {back && <AntDesign name="arrowleft" size={24} color="#fff" onPress={backRouter} />}
                <View>
                    <Text style={styles.text}>{title}</Text>
                    {!back && <Text>O Controle na palma da mão</Text>}
                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={notificationRouter}>
                    <Ionicons style={styles.icon} name="notifications" size={24} color="#fff" />
                    <Text style={styles.iconNumber}>
                        {notification > 0 && notification}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        alignItems: 'flex-start',
        marginHorizontal: 38,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
    iconContainer: {
        flexDirection: 'row'
    },
    icon: {
        position: 'relative'
    },
    iconNumber: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: -10,
        right: -5,
        color: '#fff'
    },
});
