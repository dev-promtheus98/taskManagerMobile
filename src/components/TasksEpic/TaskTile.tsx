import React from 'react'
import { View, Image, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../../redux/actions'
import { Tasks } from '../../types/Tasks.type'

type Props = {
    task: Tasks,
}

const TaskTile = ({task}: Props) => {
    const dispatch = useDispatch();

    const _onPress = () =>{
        dispatch(toggleTask(task))
    }

    const _onDelete = () =>{
        console.log('====================================');
        console.log("delete", task);
        console.log('====================================');
        dispatch(deleteTask(task))
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