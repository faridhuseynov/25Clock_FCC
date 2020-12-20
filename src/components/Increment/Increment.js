import React from "react"

const increment = (props) => {
    return (<div id={props.incrId} onClick={props.clicked}>
        <i className={props.iconClass}></i>
    </div>)
}

export default increment;