import React,{useState} from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoList from './TodoList'



const TodoApp = () => {
    const [list,setList] = useState([])
    const addList = (newList)=>{
        setList([...list,newList]);
        console.log(list)
    }
    const deleteList =(value)=>{
        setList(list.filter((list)=>list != value))
    }
  return (
    <div>
        TodoApp
        <TodoInput addList={addList}/>
        <TodoList >
            
            {list.map((list)=>(
                <TodoItem value={list} deleteList={deleteList}/>
            ))
            } 
            
        
        </TodoList>
        
        </div>
  )
}

export default TodoApp