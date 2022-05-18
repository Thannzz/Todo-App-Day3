import React from 'react'
import {useState} from 'react'


const TodoInput = ({addList}) => {
    const [value,setValue]=useState('')
  return (
    <div>
        <input 
        type='text' 
        placeholder='New Todo ITem'
        onChange={(e)=>{setValue(e.target.value)}} />
        <button onClick={()=>{
            // console.log(value)
            addList(value)
            setValue('')
        }}>Add</button>
    </div>
  )
}

export default TodoInput