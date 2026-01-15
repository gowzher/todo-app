import Todo from './Todo'

function TodoList({ todos }) {

  return (
    <div>
      {todos && todos.map((todo) =>
        <Todo key={todo.id} todo={todo} />
      )}
    </div>
  )
}

export default TodoList
