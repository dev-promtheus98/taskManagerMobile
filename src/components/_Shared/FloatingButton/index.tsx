import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    toggleForm: () => void,
    isFormOpened: boolean
}

const FloatingButton = ({ toggleForm, isFormOpened }: Props) => {

    const showCorrectIcon = () => {
        return isFormOpened ? <Text style={styles.title}>X</Text> : <Text style={styles.title}>+</Text>;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={toggleForm}>
            {showCorrectIcon()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#fff",
        textAlign: "center"
    }
});

export default FloatingButton