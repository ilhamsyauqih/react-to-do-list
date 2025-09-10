import React from 'react'
import { useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const listBaru = useRef('');
  const [listBanyakk, setList] = useState([])

  function setId() {
    const jumlahList = listBanyakk.length
    return jumlahList + 1
  }

  const addTask = (event) => {
    event.preventDefault()
    if (listBaru.current.value === '') {
      alert('Masukkan ToDoList!')
      return false
    }
    const data = {
      id: setId(),
      list: listBaru.current.value,
      completed: false
    }
    listBaru.current.value = ''
    setList([...listBanyakk, data])
  }


  return (
    <div>
      <>
        <Form addTask={addTask} listBaru={listBaru} />
        <ToDoList listBanyakk={listBanyakk} />
      </>
    </div>
  )
}

export default App
