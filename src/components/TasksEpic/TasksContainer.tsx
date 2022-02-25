import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Tasks } from '../../types/Tasks.type';
import FloatingButton from '../_Shared/FloatingButton';
import TaskForm from './TaskForm';
import TasksCounter from './TasksCounter';
import TasksList from './TasksList';

type Props = {}

const TasksContainer = (props: Props) => {

  const [tasks, setTasks] = useState([{ id: new Date().getTime(), title: "Nouvelle tâche", completed: false }]);
  const [isFormOpened, setIsFormOpened] = useState(false);


  const onAddTask = (title: string) => {
    const newTask: Tasks = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  }

  const onChangeStatus = (id: number) => {
    let newTasks: Tasks[] = [];

    tasks.forEach(task => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed
        });
      }else{
        newTasks.push(task)
      }
    });

    setTasks(newTasks);
  }

  const onDeleteTask = (id: number) => {
    const newTasks: Tasks[] = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  const _getCreatedCount = () => {
    return tasks.length;
  }

  const _getCompletedCount = () => {
    return tasks.filter(task => task.completed == true).length;
  }

  const showTaskForm = () => {
    return isFormOpened && <TaskForm onAddTask={onAddTask} />;
  }

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  }

  return (
    <View style={styles.container}>
      {showTaskForm()}
      <TasksCounter createdCount={_getCreatedCount()} completedCount={_getCompletedCount()} />
      <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask}/>
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