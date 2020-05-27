import React from 'react';

function Listitem(props){
    return(
        <div onClick= {()=>props.handleClick(props.rowData)}>
           <p>{props.rowData.company}</p>
           <p>{props.rowData.designation}</p>
           <p>{props.rowData.country}</p>
        </div>
    )
}

export default Listitem;