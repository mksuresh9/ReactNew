import React from "react";


function Todo(props){
console.log("props",props)
    return(
        <div>
            <input type="checkbox" />
            <ul>{Object.values(props.item).map(i=><li>{i}</li>)}</ul>
            
        </div>
    );
}
export default Todo;
