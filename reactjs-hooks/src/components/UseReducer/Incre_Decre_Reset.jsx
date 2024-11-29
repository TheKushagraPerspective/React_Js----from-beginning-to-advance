import React , {useReducer} from 'react'

const initialState = 0;
const reducer = (state , action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:;
      return "unexpected action occured";
}}


const Incre_Decre_Reset = () => {
  
    const [count , dispatch] = useReducer(reducer , initialState);

    return (
      <>
          <h2>Count : {count}</h2>
          <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
          <button onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
          <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
      </>
    )
}

export default Incre_Decre_Reset
