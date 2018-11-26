import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo, updateTodo } from '../actions/actions'
import TodoList from '../components/TodoList'
import { Filters } from '../actions/actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case Filters.SHOW_ALL:
            return todos
        case Filters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case Filters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id, text)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
