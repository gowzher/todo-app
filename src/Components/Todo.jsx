import { FaEdit, FaTrash } from 'react-icons/fa'

function Todo() {
  return (
    <div className="todo-item">
      <span>ben ilk todoyum</span>
      <div className="todo-actions">
        <FaEdit />
        <FaTrash />
      </div>
    </div>
  )
}

export default Todo
