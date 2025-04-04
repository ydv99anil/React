import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='font-bold text-3xl w-9/10'>Learn About reduxToolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
