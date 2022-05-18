import React from 'react'

const TodoList = ({children}) => {
  return (
    <ul>
        <h3>Here is your TODO</h3>
        {children}
    </ul>
  )
}

export default TodoList