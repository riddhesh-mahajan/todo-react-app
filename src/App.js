import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const localStorageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (localStorageTodos == null) return
    
    setTodos(localStorageTodos)
  }, [])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  
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
