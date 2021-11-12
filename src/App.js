import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Navbar from './Navbar';

const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const todoColorRef = useRef()

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
    const color = todoColorRef.current.value;
    if(name == '') return

    setTodos(prevTodos=>{
      return [{'id': prevTodos.length, 'name': name, 'color': color, 'completed': false}, ...prevTodos]
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
        <div className="d-flex mb-3">
          <input ref={todoColorRef} type="color" className="form-control form-control-color me-2" title="Choose Todo color" />
          <input ref={todoNameRef} placeholder="Todo name" type="text" className="form-control mb-2" />
        </div>
        
        <button onClick={addTodo} className="btn btn-primary me-2">Add Todo</button>       
        
        <p>{todos.filter(todo=> !todo.completed).length} left todos</p>

        <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </>
  )
}

export default App;
