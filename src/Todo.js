import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    
    return (
        <>     
        <div class="p-3 shadow-sm border mb-2">
            <input className="form-check-input p-2 me-2" type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
            <label className="form-check-label">{todo.name}</label>
        </div>
        </>
    )
}
