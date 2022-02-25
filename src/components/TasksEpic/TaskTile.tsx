import React from 'react'
import { View, Image, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Tasks } from '../../types/Tasks.type'

type Props = {
    task: Tasks,
    onChangeStatus: (f: number)=>void,
    onDeleteTask: (f: number)=>void,
}

const TaskTile = ({task, onChangeStatus, onDeleteTask}: Props) => {

    const _onPress = () =>{
        onChangeStatus(task.id);
    }

    const _onDelete = () =>{
        onDeleteTask(task.id);
    }

    const _showIcon = () => {
        return task.completed ? require('../../../assets/icon_check.png') : require('../../../assets/icon_circle.png')
    }
    
    const _showColor = () => {
        return task.completed ? 'lightgrey' : 'black';
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_onPress}>
                <View style={styles.subContainer}>
                    <Image
                        style={styles.icon}
                        source={_showIcon()}
                    />
                    <Text style={[styles.title, {color: _showColor()}]}>{task.title}</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={_onDelete}>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/icon_bin.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        marginLeft: 30
    },
    icon: {
      width: 30,
      height: 30,
    },
});
  

export default TaskTile