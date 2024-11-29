// import React from 'react'
// import './App.css'
// import ComponentA from './components/UseContext/ComponentA'
// export const UserContext = React.createContext();
// export const ScoreContext = React.createContext(0);


// function App() {


//   return (
//     <>
//       <UserContext.Provider value={"Kushagra Varshney"}>
//           <ScoreContext.Provider value={88}>
//               <ComponentA />
//           </ScoreContext.Provider>
//       </UserContext.Provider>
//     </>
//   )
// }

// export default App



// another code for useContext usage
// import React , {useState} from 'react'
// import ThemedComponent from './components/UseContext/ThemedComponent';
// export const ThemeContext = React.createContext();

// const App = () => {

//   const [theme, setTheme] = useState('light');


//   return (
//     <>
//       <ThemeContext.Provider value={{theme , setTheme}}>
//               <ThemedComponent />
//       </ThemeContext.Provider>
//     </>
//   )
// }

// export default App





// // another code for useMemo in which the component is ExpensiveCalculations
// import React , {useState} from 'react'
// import ExpensiveCalculations from './components/UseMemo/ExpensiveCalculations';

// const App = () => {

//   const [number , setNumber] = useState(5);   // finding fact of that number
//   const [randomText , setRandomText] = useState('');



//   return (
//     <>
//         <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value) || 0)} />
//         <ExpensiveCalculations number={number} />
//         <input type="text" value={randomText} onChange={(e) => setRandomText(e.target.value)} placeholder="Type something..." />
//     </>
//   )
// }

// export default App





// // Another code for useReducer() hook
// import React from 'react'
// import Incre_Decre_Reset from './components/UseReducer/Incre_Decre_Reset'


// const App = () => {


//   return (
//     <>
//         <Incre_Decre_Reset />
//     </>
//   )
// }

// export default App





import React , {useState} from 'react'
import UseToggle from './components/custom-hooks/useToggle'

const App = () => {

  const [isToggled , toggle] = UseToggle(false)   // this 2nd name inside the square brackets should be same as function name as in the custom hooks like in my case , the name is toggle


  return (
    <>
        <button onClick={toggle}>
          {isToggled ? 'OFF' : 'ON'}
        </button>
        <p>
          {isToggled ? 'This is ON' : 'This is OFF'}
        </p>
    </>
  )
}

export default App
