import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, updateTodo }) => (
    <div>
        {todos.map(todo =>
        <Todo
            key={todo.id}
            {...todo}
            handleToggle={() => toggleTodo(todo.id)}
            handleDelete={() => deleteTodo(todo.id)}
            handleEdit={() => editTodo(todo.id, todo.text)}
            handleUpdate={(e) => updateTodo(todo.id, e.target.value)}
        />
        )}
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        editing: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
}

export default TodoList
