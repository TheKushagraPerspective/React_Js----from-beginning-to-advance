import React , {useMemo} from 'react'

const ExpensiveCalculations = ({number}) => {

    // Expensive function
    const calculateFactorial = (num) => {
        console.log("Calculating factorial...");
        if(num <= 1) {
            return 1;
        }

        return num * calculateFactorial(num - 1);
    }

    const factorial = useMemo(() => calculateFactorial(number) , [number]);


  return (
    <>
        <h2>Factorial of {number} is: {factorial}</h2>
    </>
  )
}

export default ExpensiveCalculations
