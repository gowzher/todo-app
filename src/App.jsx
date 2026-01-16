import { useEffect, useState } from 'react'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos); // String olarak saklanan veriyi diziye çevirir
    }
    return []; // Eğer storage boşsa boş dizi ile başla
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // [todos] bağımlılığı sayesinde liste her değiştiğinde çalışır

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const updateTodo = (newTodo) => {
    setTodos([...todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))])
  }

  return (
    <div className="app">
      <h1>Todo Listem</h1>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo} />
    </div>
  )
}

export default App
