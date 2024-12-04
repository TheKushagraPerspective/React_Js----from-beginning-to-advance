import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'



const Todos = () => {

    const todo = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const RemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }


  return (
    <>
        <div>My Todos</div>
        {todo.map((item , index) => (
            <li key={index}>
                {item.text}
                <button
                onClick={() => RemoveTodo(item.id)}>
                    X
                </button>
            </li>
        ))}
    </>
  )
}

export default Todos
