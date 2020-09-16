import React, { createRef } from "react"


function Delete(props){

    const drop = (ev) => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData(ev.target.id);
        console.log("yes :",data);
        ev.target.appendChild(document.getElementById(data));
    
    }
    const allowDrop = (ev) =>{
        ev.preventDefault();
    }

    return(
        <div
            id = {props.id}
            className = {props.className}
            onDrop={(ev) => drop(ev)}
            onDragOver={(ev) => allowDrop(ev)}   
        >

        {props.children}
        </div>
    )
}
export default Delete