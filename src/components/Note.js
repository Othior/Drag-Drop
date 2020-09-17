import React, { createRef, useRef, useState } from "react"

function Note(props){
   
    let itsHere = false;

    let [listNote,setListNote] = useState([]);

    const drop = (ev) => {
        ev.preventDefault();
        
        // recuepere les données en fonction de l'id de la personne cibler
        let data = ev.dataTransfer.getData(ev.target.id);

        console.log("id",ev.target.id);
                
        // condition pour voir si l'element est deja a l'interieure ou non
        if(!itsHere){
            ev.target.appendChild(document.getElementById(data));
            
        }
        else{
            return console.log("joe",itsHere)
        }
       
        
    }

    // moment du drag ou l'on passe au dessus des blocks ou l'ont peut deposé les blockElements
    const allowDrop = (ev) =>{
        ev.preventDefault();

        console.log("je teste qlq chose",ev.target.id)

        if(!(ev.target.id === "move")){
            itsHere = true;
        }
        
    }
    return(
        <div
            id= {props.id}
            className= {props.className}
            onDrop={(ev) => drop(ev)}
            onDragOver={ (ev) => allowDrop(ev)}
        >
            {props.children}
        </div>
    )
}

export default Note
