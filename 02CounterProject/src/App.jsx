import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 5

  const increaseValue = () =>{
    // counter = counter + 1;
    if(counter < 30){
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
    }
    console.log("Clicked ", counter);
    console.log("Value Updated to: ", Math.random());
  }

  

  const decreaseValue = () =>{
    // counter = counter - 1;
    if(counter > 0){
      setCounter(counter-1);
    }
    console.log("Clicked ", counter);    
    console.log("Value Updated to: ", Math.random());
  }


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseValue}>Increase Value {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
