import React from 'react'
import { FlatList, Text } from 'react-native'
import { Tasks } from '../../types/Tasks.type'
import TaskTile from './TaskTile'

type Props = {
    tasks: Tasks[],
}

type Render = {
    item: Tasks
}

const TasksList = ({ tasks }: Props) => {
    const _renderItem = ({item}: Render) => <TaskTile task={item} ></TaskTile>
    return (
        <FlatList
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default TasksList