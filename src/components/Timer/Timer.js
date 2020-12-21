import React from "react"

const timer = (props) => {
    // {console.log(props.sessionLengthMinutes);}
    let color="white";
    {props.sessionLengthMinutes<1?(color="red"):(color="white")}
    return (
        <div style={{color:color}} className="Timer">
            <p id="timer-label">{props.timerStatus}</p>
            <p id="time-left">{props.sessionLengthMinutes<10?"0":""}{props.sessionLengthMinutes} : {props.sessionLengthSeconds<10?"0":""}{props.sessionLengthSeconds}</p>
        </div>
    )
}

export default timer;