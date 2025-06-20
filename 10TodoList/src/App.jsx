import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import  TodoContextProvider from './context/TodoContext'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (message) => {
     setTodos((prev)=>[{id: Date.now(), ...message}, ...prev])
  }

  const updateTodo = (id, message) =>{
      setTodos((prev)=> prev.map((todo)=>(
        todo.id === id ? message : todo 
      )))
  }

  const deleteTodo = (id) => {
     setTodos((prev)=> prev.filter((todo)=> todo.id != id))
  }

  const completedTodo = (id) => {
     setTodos((prev)=> prev.map((todo)=>
       todo.id === id ? { ...todo, completed: !todo.completed}: todo))
  }

  useEffect(()=>{
     const todos = JSON.parse(localStorage.getItem("todos"))
     if (todos && todos.length > 0){
      setTodos(todos) 
     }
  }, [])
  
  useEffect(()=>{
     localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  
  return (
    <TodoContextProvider value = {{todos, updateTodo, deleteTodo, completedTodo, addTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
     <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2"></h1>
        <div className="mb-4">
            <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
             {todos.map((todo)=>{
              return(
              <div key = {todo.id}>
                <TodoItem todo={todo} />
              </div>
              );
             })}
        </div>
    </div>
   </div>
   </TodoContextProvider>
  )
}

export default App
