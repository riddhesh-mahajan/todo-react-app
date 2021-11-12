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
      return [...prevTodos, {'id': prevTodos.length, 'name': name, 'completed': false}]
    })
    
    todoNameRef.current.value = ''
  }

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id == id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={addTodo}>Add Todo</button>
    <p>{todos.filter(todo=> !todo.completed).length} left todos</p>
    </>
  )
}

export default App;
