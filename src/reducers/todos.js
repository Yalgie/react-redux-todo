const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    editing: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo, 
                        completed: !todo.completed
                    }
                }
                else {
                    return todo
                }
            })
        case 'DELETE_TODO':
            let nextState = [];

            state.forEach(todo => {
                if (todo.id !== action.id) {
                    nextState.push(todo)
                }
            });

            return nextState;
        case 'EDIT_TODO':
            return state.map(todo => {
                if (todo.id === action.id && todo.editing) {
                    return {
                        ...todo, 
                        text: action.text,
                        editing: false
                    }
                }
                else if (todo.id === action.id && !todo.editing) {
                    return {
                        ...todo, 
                        editing: true
                    }
                }
                else {
                    return todo
                }
            })
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.id === action.id && todo.editing) {
                    return {
                        ...todo, 
                        text: action.text
                    }
                }
                else {
                    return todo
                }
            })
        default:
            return state
    }
}

export default todos
