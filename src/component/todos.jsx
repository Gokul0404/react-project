import React,{memo} from 'react'

const Todos = ({todos, addTodo}) => {
  return (
    console.log("hello"),
    <div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos)
