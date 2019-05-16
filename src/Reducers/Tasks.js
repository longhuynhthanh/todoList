import * as Type from './../Const/Type';
const id = require('uuid/v4');
const data = JSON.parse(localStorage.getItem('tasks'));
const Tasks = data ? data : [];

const ReducerTasks = (state = Tasks, action) => {
    switch (action.type) {
        case Type.LIST_ALL: {
            return state;
        }
        case Type.ADD_TASK: {
            if (action.task && action.task.id === '') {
                const newTask = {
                    id: id(),
                    imageURL: action.task.imageURL,
                    name: action.task.name,
                    level: action.task.level
                };
                state.push(newTask);
            } else if (action.task && action.task.id) {
                const index = state.findIndex(task => task.id === action.task.id);
                state[index] = { ...state[index], imageURL: action.task.imageURL, name: action.task.name, level: action.task.level };
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        case Type.DELETE_TASK: {
            state = state.filter(task => task.id !== action.id);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        case Type.SEARCH: {
            const newData = [...JSON.parse(localStorage.getItem('tasks'))];
            const newTasks = newData.filter(task => task.name.toUpperCase().includes(action.string.toUpperCase()));
            return [...newTasks];
        }
        default: return [...state];
    }
};

export default ReducerTasks;