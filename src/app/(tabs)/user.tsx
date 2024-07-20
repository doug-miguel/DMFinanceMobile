import { EditProfileComponente, LogoutComponente, SettingComponente } from "@/assets/images/SvgComponent";
import Base from "@/components/base";
import Header from "@/components/header";
import { useRouter } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function UserScreen() {
    const router = useRouter();
    function nav(nav: string) {
        router.push(nav)
    }

    return (
        <View style={styles.container}>
            <Header title="Perfil" back={true} />
            <Base style={styles.content}>
                <View style={styles.icon}>
                    <Text style={styles.iconText}>DM</Text>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => nav('/editUser')}>
                        <View style={styles.button}>
                            <EditProfileComponente />
                            <Text style={styles.buttonText}>Editar Perfil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav('/setting')}>
                        <View style={styles.button}>
                            <SettingComponente />
                            <Text style={styles.buttonText}>Configurações de Grupo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav('/')}>
                        <View style={styles.button}>
                            <LogoutComponente />
                            <Text style={styles.buttonText}>Sair</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Base>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B82F6',
        paddingTop: 15
    },
    content: {
        marginTop: 80,
        position: 'relative'
    },
    icon: {
        width: 115,
        height: 115,
        backgroundColor: '#031314',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 10,
        top: -50,
    },
    iconText: {
        color: '#fff',
        fontSize: 40
    },
    containerButton: {
        gap: 35,
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
        width: 300,
        height: 60,
    },
    buttonText: {
        fontSize: 20,
        color: '#1B1B3A'
    }
});
