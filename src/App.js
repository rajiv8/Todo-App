import './App.css';
import Header from "./myComponents/Header";
import {AddTodo} from "./myComponents/AddTodo";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";
import React, { useState,useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    // console.log("I am onDelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }


  const addTodo = (title,desc)=>{
    // console.log("I am adding this Todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    // console.log(myTodo);
  }

  const [todos,setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
      <Header heading={"Todos-List"} searchbar={false}/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <Todos todo={todos} onDelete={onDelete}/>
          )
          }}>
        </Route>
        <Route exact path="/adTodo">
          <AddTodo addTodo={addTodo}/> 
        </Route>
      </Switch>
           
      <Footer/>
    </Router>
    </>
  );
}

export default App;
