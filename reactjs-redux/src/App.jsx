import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReduxCounter from './components/ReduxCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App.jsx</h1>
      <ReduxCounter />
    </>
  )
}

export default App