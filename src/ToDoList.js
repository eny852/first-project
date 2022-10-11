import React from "react"
import ToDo from "./ToDo"

export default function TodoList({ToDos, toggleToDo}) {
  return (
    ToDos.map( todo => { return <ToDo key={todo.id} toggleToDo={toggleToDo} ToDo={todo}/> })
  )
}
