import { FaEdit, FaTrash } from 'react-icons/fa'

function Todo({ todo, onDeleteTodo }) {
  const { content, id } = todo

  const handleDelete = () => {
    onDeleteTodo(id)
  }


  return (
    <div className="todo-item">
      <span>{content}</span>
      <div className="todo-actions">
        <FaEdit />
        <FaTrash onClick={handleDelete} />
      </div>
    </div>
  )
}

export default Todo
