import React from 'react'
import { FlatList, Text } from 'react-native'
import { Tasks } from '../../types/Tasks.type'
import TaskTile from './TaskTile'

type Props = {
    tasks: Tasks[],
    onChangeStatus: (f: number)=>void,
    onDeleteTask: (f: number)=>void,
}

type Render = {
    item: Tasks
}

const TasksList = ({ tasks, onChangeStatus, onDeleteTask }: Props) => {
    const _renderItem = ({item}: Render) => <TaskTile task={item} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask}></TaskTile>
    return (
        <FlatList
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default TasksList