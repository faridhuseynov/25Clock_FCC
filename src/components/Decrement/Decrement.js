import React from "react"

const decrement =(props)=>{
    return(<div id={props.decrId} onClick={props.clicked}>
        <i className={props.iconClass}></i>
    </div>)
}

export default decrement;