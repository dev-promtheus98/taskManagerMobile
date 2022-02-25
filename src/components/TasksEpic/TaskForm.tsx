import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

type Props = {
    onAddTask: (f: string)=>void
}

const TaskForm = ({onAddTask}: Props) => {

    const [title, setTitle] = useState('');

    const _onChangeText = (value: any) => {
        setTitle(value);
    }

    const _onPress = () => {
        if (title.length > 0) {
            onAddTask(title);
            setTitle("");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput style={styles.textInput} placeholder='Enter' value={title} onChangeText={_onChangeText} />
            </View>
            <Button onPress={_onPress} title={'Ajouter'} color="#841584"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    containerInput:{
        width: "75%",
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        padding: 0,
        paddingLeft: 7
    },
    textInput:{
        padding: 5
    }
});

export default TaskForm