import { FaEdit, FaTrash } from 'react-icons/fa'

function Todo({ todo }) {
  const { content, id } = todo
  return (
    <div className="todo-item">
      <span>{content}</span>
      <div className="todo-actions">
        <FaEdit />
        <FaTrash />
      </div>
    </div>
  )
}

export default Todo
