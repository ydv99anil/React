import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'


function App() {
  const [count, setCount] = useState(0)
  let Object = {
    Name: "Anil Yadav",
    Age: 22
  };

  let Arr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-orange-500 p-4 rounded-xl text-white mb-5'>TailWind Test</h1>

      <Card myName="Anil Yadav" myObj={Object} myArr={Arr} att="Myself" btnText="Click Here"/>
      <Card myName="Rinku Jai" att="Myself" btnText="Click Here"/>
      <Card />

    </>
  )
}

export default App
