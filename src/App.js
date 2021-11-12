import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function addTodo(){
    const name = todoNameRef.current.value;
    if(name == null) return

    setTodos(prevTodos=>{
      console.log(prevTodos)
      return [...prevTodos, {'name': name}]
    })
    
    todoNameRef.current.value = ''
  }

  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={addTodo}>Add Todo</button>
    <p>0 left todos</p>
    </>
  )
}

export default App;
