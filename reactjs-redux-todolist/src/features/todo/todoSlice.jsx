import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id:1,
        text: 'Hello World'
    }]
}


// we are defining here the function for the property "removeTodo", and we can also define it inside the reducer as we have done with addTodo
// state will give us the access of the all values that are there in initial state or give us the current state
// action will givw you that what to do
const removeFromTodo = (state , action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}


// creating a slice
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // inside reducer we have properties and function of that property
        addTodo : (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : removeFromTodo,
    }
})


export default todoSlice.reducer
export const {addTodo , removeTodo} = todoSlice.actions