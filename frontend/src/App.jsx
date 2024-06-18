import { useState } from 'react'
import { CreateToDo } from './components/CreateToDo'
import './App.css'
import { Todos } from './components/Todos'



function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todo").then(async function(res){
    const json =await res.json()
    setTodos(json.todos)
  }
  )

  return (
    <>
    <CreateToDo></CreateToDo>
    <Todos todos={todos}></Todos>
    </>
  )
}

export default App
