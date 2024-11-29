import React , {useState} from 'react'

const UseToggle = () => {

    const [value , setValue] = useState(false)

    const toggle = () => {
        setValue((prev) => !prev)
    }

    return [value , toggle]
  
}

export default UseToggle
