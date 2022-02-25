import React from 'react'
import { StyleSheet, View } from 'react-native'
import CounterTile from './CounterTile'

type Props = {
    createdCount: number,
    completedCount: number,
}

const TasksCounter = ({createdCount, completedCount}: Props) => {
  return (
    <View style={styles.container}>
        <CounterTile title='Tâches crées' counter={createdCount} />
        <CounterTile title='Tâches complétées' counter={completedCount} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 7,
        marginTop: 7,
    }
});

export default TasksCounter