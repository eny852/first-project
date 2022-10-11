import React from 'react'

export default function ToDo({ToDo , toggleToDo}) {

    function handleToDoClick(){
        toggleToDo(ToDo.id)
    }

  return (
    <div>
        <input type="checkbox" checked={ToDo.complete} onChange={handleToDoClick}/>
        {ToDo.name}
    </div>
  )
}
