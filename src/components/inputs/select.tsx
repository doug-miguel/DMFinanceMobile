import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

interface SelectProps {
    title?: string;
    options: string[];
    onSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ title, options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        setDropdownVisible(false);
        onSelect(option);
    };

    return (
        <View style={styles.container}>
            {title && <Text style={styles.textInput}>{title}</Text>}
            <TouchableOpacity
                style={styles.containerInput}
                onPress={toggleDropdown}
                activeOpacity={0.7}
            >
                <Text style={styles.input}>{selectedOption || "Selecione"}</Text>
                <Feather name={dropdownVisible ? "chevron-up" : "chevron-down"} size={20} color="#1E3A8A" />
            </TouchableOpacity>
            {dropdownVisible && (
                <View style={styles.dropdown}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.option}
                            onPress={() => handleSelectOption(option)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 15
    },
    textInput: {
        color: "#1E40AF",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 30,
        textTransform: "capitalize",
    },
    containerInput: {
        width: 357,
        borderRadius: 18,
        backgroundColor: "#D0E1FF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 6,
        height: 41,
    },
    input: {
        color: "#1E3A8A",
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 6,
        flex: 1,
    },
    dropdown: {
        position: "absolute",
        width: 357,
        marginTop: 74,
        backgroundColor: "#D0E1FF",
        borderRadius: 18,
        shadowColor: "#1E3A8A",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    option: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    optionText: {
        color: "#1E3A8A",
    }
});

export default Select;
