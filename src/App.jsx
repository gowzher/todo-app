import { useState } from 'react'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <div className="app">
      <h1>Todo Listem</h1>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  )
}

export default App
