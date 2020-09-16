import React, { createRef, useState } from "react"


function Note(props){

    const drop = (ev) => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData(ev.target.id);
        ev.target.appendChild(document.getElementById(data));
        
    }
    const allowDrop = (ev) =>{
        ev.preventDefault();
    }
    return(
        <div
            id= {props.id}
            className= {props.className}
            onDrop={(ev) => drop(ev)}
            onDragOver={(ev) => allowDrop(ev)}
        >
            {props.children}
        </div>
    )
}

export default Note
