import { Tasks } from "../../types/Tasks.type";
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actionsType";

const defaultState: Tasks[] = [
    {id: new Date().getTime(), title: "Nouvelle tâche reducers", completed: false }
];

const tasksList = (state = defaultState, action: { type: any, payload: Tasks }) => {
    // action : {type: Nom_Action, payload}

    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]

        case TOGGLE_TASK:
            return state.map(task => {
                if (task.id == action.payload.id) {
                    return action.payload;
                }else{
                    return task;
                }
            });
        
        case DELETE_TASK:
            return state.filter(task => task.id != action.payload.id);
                
        default:
            return state
    }
}

export default tasksList;