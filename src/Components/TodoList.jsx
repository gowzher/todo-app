import Todo from './Todo'

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {

  return (
    <div>
      {todos && todos.map((todo) =>
        <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />
      )}
    </div>
  )
}

export default TodoList
