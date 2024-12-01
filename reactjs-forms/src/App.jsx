import React from 'react'
import './App.css'
import Form1 from './components/controlledComponent/form1'
import Form2 from './components/controlledComponent/Form2'
import Form3 from './components/unControlledComponent/Form3'
import FormValidation1 from './components/validations/FormValidation1'

function App() {

  return (
    <>
        <Form1 />    {/* using class component */}
        <Form2 />    {/* using function component */}
        <Form3 />    {/* using function component for uncontrolled component */}
        <FormValidation1 />
    </>
  )
}

export default App
