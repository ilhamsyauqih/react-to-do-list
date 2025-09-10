import React from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const addTask = () => {
    console.log('Saya Diklik')
  }
  return (
    <div>
      <>
        <Form addTask={addTask}/>
        <ToDoList />
      </>
    </div>
  )
}

export default App
