import React from 'react'
import {useContext} from 'react';
import { UserContext , ScoreContext } from '../../App';



// component a and component b are two different componnts and app.jsx is connected with componentA and componentA is connected with componentB 
// so componentB is indirectly connected with app.jsx and for data transfer (from app to compB) first we have to transfer from app to compA and
// then from compA to compB and then compB will get the data from app.jsx 
// but by using useContext hook, we can directly send the data from app to  compB so code for this is in app.js , compA , and compB.(check in these for code)


const ComponentB = () => {

    const user = useContext(UserContext)
    const score = useContext(ScoreContext)
    
  return (
    <>
        {user} - {score}
    </>
  )
}

export default ComponentB
