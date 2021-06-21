import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    let todoitemstyle = {
        width: "18rem",
        border:"2px solid blue"
    }
    return (
        <center>
        <div className="card m-1 " style={todoitemstyle}>
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <hr color="black"/>
                <p className="card-text">{todo.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Done</button>
            </div>
        </div>
        </center>
    )
}
