import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { IoMdCheckbox } from 'react-icons/io'

function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const { content, id } = todo

  const [editable, setEditable] = useState(false)
  const [newTodo, setNewTodo] = useState(content)

  const handleDelete = () => {
    onDeleteTodo(id)
  }

  const updatedTodo = () => {
    onUpdateTodo({ id, content: newTodo })
    setEditable(false)
  }


  return (
    <div className="todo-item">
      {editable && editable ? <input type="text" className='edit-input' onChange={(e) => setNewTodo(e.target.value)} value={newTodo} /> : <span>{content}</span>}
      <div className="todo-actions">
        {editable && editable ? <IoMdCheckbox onClick={updatedTodo} /> : <FaEdit onClick={() => setEditable(true)} />}
        <FaTrash onClick={handleDelete} />
      </div>
    </div>
  )
}

export default Todo
