import React from "react";
import { Todoitem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container min-vh-100">
      <h3 className="my-3">Todo List</h3>
      {props.todos.length===0? "Congratulations, you completed all your tasks! No todos to display.":
    props.todos.map((todo)=>
    {
        return( 
        <><Todoitem todo={todo} onDelete={props.onDelete} />
        <hr/>
        </>
        )
        
    })}  
    </div>
  );
};
