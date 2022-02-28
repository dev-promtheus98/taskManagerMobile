import { Tasks } from "../types/Tasks.type";
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionsType";

export const addTask = (title: string) => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime(),
        title: title,
        completed: false
    }
});

export const toggleTask = (task: Tasks) => ({
    type: TOGGLE_TASK,
    payload: {
        ...task,
        completed: !task.completed
    }
});

export const deleteTask = (task: Tasks) => ({
    type: DELETE_TASK,
    payload: {
        ...task
    }
});