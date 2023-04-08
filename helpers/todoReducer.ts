import { Todo } from "../interfaces";

export const todoReducer = (initialState: Todo[] = [], action: any) => {
  
    switch (action.type) {
        case '[TODO] - Add Todo':
            return [action.payload, ...initialState];

        case '[TODO] - Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] - Update Todo':
            return initialState.map(todo => ({...todo, task: todo.id === action.payload.id ? action.payload.task : todo.task}))

        case '[TODO] - Complete Todo':
            return initialState.map(todo => ({...todo, done: todo.id === action.payload ? !todo.done : todo.done}))

        case '[TODO] - Open Modal':
            return initialState.map(todo => ({...todo, modal: todo.id === action.payload ? !todo.modal : todo.modal}))
            
        default:
            return initialState;
    }
}