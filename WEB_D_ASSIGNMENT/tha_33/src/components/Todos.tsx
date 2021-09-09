import React,{useState,useContext} from 'react'
import TodoList from './TodoList'


export interface TodoType{
    title:string,
    done:boolean
}


const Todos = () => {

    const [todos,setTodos]=useState<TodoType[]>([]);
    const [input,setInput]=useState<string>("");

    return (
        <div className="todos">
        <div className="form-container">
            <div className="form">
            <input type="text" placeholder="Enter Todos" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>{
            if(input)
              {
                setTodos([
                ...todos,
                {title:input,done:false},]);setInput("");}}}>ADD</button>
            
        </div>
        </div>
        <div className="todo-bigbox">
        {todos.map((todo,index)=>{
            return <TodoList title={todo.title} done={todo.done} index={index} todos={todos} setTodos={setTodos}/>;
        })}
        </div>
      </div>
    )
}

export default Todos
