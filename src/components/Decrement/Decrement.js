import React from "react"

const decrement =(props)=>{
    return(<div id={props.id} onClick={props.clicked}>
        <i className={props.iconClass}></i>
    </div>)
}

export default decrement;