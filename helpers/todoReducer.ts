import { Todo } from "../interfaces";

export const todoReducer = (initialState: Todo[] = [], action: any) => {
  
    switch (action.type) {
        case '[TODO] - Add Todo':
            return [action.payload, ...initialState];

        case '[TODO] - Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] - Update Todo':
            return initialState.map(todo => ({
                ...todo, 
                title: todo.id === action.payload.id ? action.payload.title : todo.title,
                description: todo.id === action.payload.id ? action.payload.description : todo.description
            }))

        case '[TODO] - Complete Todo':
            return initialState.map(todo => ({...todo, done: todo.id === action.payload ? !todo.done : todo.done}))

        case '[TODO] - Open Modal':
            return initialState.map(todo => ({...todo, modal: todo.id === action.payload ? !todo.modal : todo.modal}))
        
        case '[TODO] - Open Options':
            return initialState.map(todo => ({...todo, options: todo.id === action.payload ? !todo.options : todo.options}))
            
        case '[TODO] - MOVE_ITEM':{
            const { itemId, oldIndex, newIndex } = action.payload;
            const newState = [...initialState];
            const [removed] = newState.splice(oldIndex, 1);
            newState.splice(newIndex, 0, removed);
            return newState;
        } 
        
        default:
            return initialState;
    }
}