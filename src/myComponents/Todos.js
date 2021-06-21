import React from 'react'
import {TodoItem} from "./TodoItem";
import {
    Link
  } from "react-router-dom";
  

export const Todos = (props) => {
    let todoitemstyle = {
        width: "15rem"
    }
    return (
        <div className="container my-2 py-5 ">
        <center><Link to="/adTodo"><button className="btn-success my-3">New Todo</button></Link></center>
        <h3 className="text-center">Todos List</h3>
            {props.todo.length===0? 
            (
                <center>
                <div className="card m-1 text-white bg-primary " style={todoitemstyle}>
                    <div className="card-body ">
                        <h5 className="card-title">No todos To dispaly</h5>
                    </div>
                </div>
                </center>
            )
                
            :
            props.todo.map((todo)=>{
                return (
                    
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
                   
                }
                
            )
            } 
        </div>
    )
}
