import React from 'react'

const TodoItem = ({value,deleteList}) => {
  return (
    <li>{value}
    <button onClick={()=>deleteList(value)}>Delete</button>
    </li>
  )
}

export default TodoItem