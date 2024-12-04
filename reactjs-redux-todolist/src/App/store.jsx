import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/todo/todoSlice'

const store = configureStore({
    reducer: todoReducers
})


export default store