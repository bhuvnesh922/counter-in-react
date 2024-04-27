import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [counter, setCounter] = useState(10)
  const addValue = () => {
    // console.log("Clicked", counter);
    if (counter < 20) setCounter(counter + 1)
  }
   const removeValue = () => {
    // console.log("counter update", counter = counter+1)
    if (counter > 0) setCounter(counter - 1)
   }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Reamove Value: {counter}</button>
      
    </>
  )
}

export default App
