import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({
    handleToggle, 
    handleDelete, 
    handleEdit, 
    handleUpdate, 
    completed, 
    text, 
    editing 
}) => (
    <div>
        <div
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >
            {editing ? <input 
                value={text} 
                onChange={e => handleUpdate(e)}
            /> : text}
        </div>

        <div onClick={handleDelete}>
            Delete
        </div>

        <div onClick={handleToggle}>
            <p>{completed ? "Uncomplete" : "Complete"}</p>
        </div>

        <div onClick={handleEdit}>
            <p>{editing ? "Save" : "Edit"}</p>
        </div>
    </div>
)

Todo.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired,
}

export default Todo