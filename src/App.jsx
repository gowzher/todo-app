import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="app">
      <h1>Todo Listem</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
