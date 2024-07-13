import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice"


function Addtodo() {
const [input,setInput] = useState('')

const dispatch = useDispatch()

const addTodoHandler  = (e) =>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
}

  return (
   <form onSubmit={addTodoHandler} >
    <input value ={input} className=" border-2 border-black m-4 bg-black text-white rounded-md p-2" placeholder="Enter a Todo.." type = "text" onChange={(e)=>{setInput(e.target.value)}}/>
    <button type="submit" className="bg-black text-white rounded-md p-3">Add Todo</button>
   </form>
  )
}

export default Addtodo