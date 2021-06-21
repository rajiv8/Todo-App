import React, { useState } from 'react';
import "./addTodo.css"
  
export const AddTodo = ({addTodo}) => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }
    return (
    <div className="container text-center my-3">
        <h3 className="mt-2 ">Add a Todo</h3>
        <form className="container " onSubmit={onSubmit} >
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control text-center" id="title" placeholder="Title Here" />
            </div>
            <div className="mb-3"> 
                <label htmlFor="description" className="form-label">Description</label><br/>
                <textarea name="Text1" value={desc} placeholder="Description Here" onChange={(e)=>setDesc(e.target.value)} className="text-center" rows="5"></textarea>
            </div>
            <button className="btn-success text-center">Add Todo </button>
        </form>
    </div>
        
    )
}



