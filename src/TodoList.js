import React , {useState, useRef, useEffect} from 'react'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({todos, toggleTodo}) {
    return (
       todos.map(todo=>{
            return (
                <Todo key={uuidv4()} todo={todo} toggleTodo={toggleTodo}/>  
            );
       })
    )
}
