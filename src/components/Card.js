import React, { createRef, useState } from "react"


 function Card(props){

    const drag = (ev) =>{
        // console.log("id recherche",ev.target.previousElementSibling.id)

        console.log("id recherche",ev.target.parentElement)
        const element_id = document.getElementById("move");
        ev.dataTransfer.setData(element_id.id,ev.target.id);
      }
    return(
        <div
            id = {props.id}
            className = {props.className}
            draggable = {props.draggable}
            onDragStart = {(ev) => drag(ev)}
        >   
            {props.children}
        </div>
    )
}

export default Card