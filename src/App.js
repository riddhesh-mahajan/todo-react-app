import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Navbar from './Navbar';

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
      return [{'id': prevTodos.length, 'name': name, 'completed': false}, ...prevTodos]
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
    <Navbar/>

    <div className="container mt-4">
        <input ref={todoNameRef} placeholder="Todo name" type="text" className="form-control mb-2" />
        <button onClick={addTodo} className="btn btn-primary">Add Todo</button>
        <p>{todos.filter(todo=> !todo.completed).length} left todos</p>

        <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </>
  )
}

export default App;
