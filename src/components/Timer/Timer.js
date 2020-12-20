import React from "react"

const timer = (props) => {
    return (
        <div>
            <p id={props.statusId}>{props.timerStatus}</p>
            <p id={props.timeStatusId}>{props.sessionLength}:00</p>
        </div>
    )
}

export default timer;