import { useState } from "react"



function TodoCreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState("")

  const createTodo = () => {
    if (!newTodo) return
    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo
    }
    onCreateTodo(request)
    setNewTodo("")
  }

  return (
    <div className="todo-form-container">
      <input type="text" className="todo-input" placeholder="Todo giriniz..." value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} />
      <button className="todo-button" onClick={createTodo}>Ekle</button>
    </div>
  )
}

export default TodoCreate
