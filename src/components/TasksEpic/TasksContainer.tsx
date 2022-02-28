import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { useSelector } from "react-redux";

import { getTasks } from '../../redux/selectors';
import { Tasks } from '../../types/Tasks.type';
import FloatingButton from '../_Shared/FloatingButton';
import TaskForm from './TaskForm';
import TasksCounter from './TasksCounter';
import TasksList from './TasksList';

type Props = {}

const TasksContainer = (props: Props) => {

  const [isFormOpened, setIsFormOpened] = useState(false);

  const tasks : Tasks[] = useSelector(getTasks);
  console.log('====================================');
  console.log('ALL TASKS', tasks);
  console.log('====================================');


  const _getCreatedCount = () => {
    return tasks.length;
  }

  const _getCompletedCount = () => {
    return tasks.filter(task => task.completed == true).length;
  }

  const showTaskForm = () => {
    return isFormOpened && <TaskForm />;
  }

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  }

  return (
    <View style={styles.container}>
      {showTaskForm()}
      <TasksCounter createdCount={_getCreatedCount()} completedCount={_getCompletedCount()} />
      <TasksList tasks={tasks} />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      position: 'relative'
  },
});

export default TasksContainer;