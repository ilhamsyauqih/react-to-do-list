import React from 'react'
import { useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const listBaru = useRef('');
  const [listBanyakk, setList] = useState([])
  console.log(listBanyakk);
  
  function pindahList(indexSekarang, updateIndex) {
    const dataSekarang = listBanyakk[indexSekarang] //Data dengan id ke 1 yakni syauqi
    const dataUpdate = listBanyakk[updateIndex]  //Data dengan id ke 2 yakni Ilham
    
    listBanyakk[indexSekarang] = {...dataSekarang, id: dataUpdate.id}
    listBanyakk[updateIndex] = {...dataUpdate, id: dataSekarang.id}
    

    const dataBaru = [...listBanyakk]
    setList(dataBaru)
  }

  function setId() {
    const jumlahList = listBanyakk.length
    return jumlahList + 1
  }
  
  const tandaSelesai = (id) => {
    let listItem = []
    listBanyakk.map((item, index)=>{
      if(item.id === id) {
        listItem[index]={...item, completed: !item.completed}
      } else {
        listItem[index] = item
      };
    })
    setList(listItem)
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

  const hapus = (id) => {
    if(window.confirm('Apakah benar-benar ingin menghapus data ini?')) {
      setList(listBanyakk.filter((item)=>item.id != id))
    }
  }
  

  return (
    <div>
      <>
        <Form addTask={addTask} listBaru={listBaru} />
        <ToDoList listBanyakk={listBanyakk} tandaSelesai={tandaSelesai} pindahList={pindahList} hapus={hapus}/>
      </>
    </div>
  )
}

export default App
