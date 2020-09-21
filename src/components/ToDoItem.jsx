import React from "react";

const ToDoItems = (props) =>{
    return(
        <div onClick={()=> props.onChecked(props.id)}>
            <li>{props.text}</li>
        </div>
    )
        
    
}
export default ToDoItems;