import React from 'react'
import {useSelector , useDispatch} from 'react-redux' 
// useSelector is used to read the data from the redux store
// useDispatch is used to dispatch an action to the store
import {INCREMENT , DECREMENT} from '../store/store'

const ReduxCounter = () => {

    const count = useSelector((state) => state.count)    // The state parameter represents the current state of the Redux store.
    const dispatch = useDispatch()    // it is used to pass our action to the store file. state.count accesses the count property from the state defined in your store.js.


    const Increment = () => {
        dispatch({
            type : INCREMENT
        })    // here we are passing the action to the store file
        // This dispatches an action to the Redux store.
        // The store then uses the reducer to update the state based on the dispatched action.
    }

    const Decrement = () => {
        dispatch({
            type : DECREMENT
        })    // here we are passing the action to the store file
    }

  return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default ReduxCounter
