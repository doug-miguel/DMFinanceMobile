import { StyleSheet, View, ViewStyle } from "react-native";

interface BaseProps {
    children: React.ReactNode;
    style?: ViewStyle,
}

const Base: React.FC<BaseProps> = ({ children, style }) => {
    return (
        <View style={[styles.content, style]}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 45,
        height: '100%'
    },
});

export default Base
