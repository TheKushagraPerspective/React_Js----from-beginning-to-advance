import React , {useState} from 'react'
import { addTodo } from '../features/todo/todoSlice';
import {useDispatch , useSelector} from 'react-redux'


const AddTodo = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleOnAddTodo = (e) => {
        e.preventDefault();

        dispatch(addTodo(input))
        setInput('')
    }

    const handleOnInputChange = (e) => {
        setInput(e.target.value)
    }


  return (
    <>
        <form action="#" onSubmit={handleOnAddTodo}>
            <input type="text"
            value={input}
            onChange={handleOnInputChange} 
            />

            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default AddTodo
