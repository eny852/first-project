import React, {useState, useRef, useEffect} from 'react';
import TodoList from './ToDoList';
import { v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = 'ToDosApp.ToDos'

function App() {
  const [ToDos,SetToDos] = useState([])
  const ToDoNameRef = useRef()

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedToDos) SetToDos( prevTodos => [...prevTodos, ...storedToDos] )
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(ToDos))
  }, [ToDos])

  function toggleToDo(id){
    const newToDos = [...ToDos]
    const newToDo = newToDos.find(newToDo => newToDo.id === id)
    newToDo.complete = !newToDo.complete
    SetToDos(newToDos)
  }

  function handleAddToDo(e){
    const name = ToDoNameRef.current.value
    if(name === '') return
    SetToDos(prevTodos => { return [...prevTodos,{id:uuidv4(),name:name,complete:false}] } )
    ToDoNameRef.current.value = null
  }

  function handleClearToDos(){
    SetToDos(prevToDos => prevToDos.filter(todo => !todo.complete));
  }

  return (
    <>
      <TodoList ToDos={ToDos} toggleToDo={toggleToDo}/>
      <input ref={ToDoNameRef} type="text"/>
      <button onClick={handleAddToDo}>Add Todo</button>
      <button onClick={handleClearToDos}>Clear completed ToDo</button>
      <div>{ToDos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
