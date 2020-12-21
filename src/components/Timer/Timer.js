import React from "react"

const timer = (props) => {
    let color="white";
    let i="";
    let j="";
    props.sessionLengthSeconds<10?j="0":j="";
    props.sessionLengthMinutes<10?i="0":i="";
    let minutes=i+props.sessionLengthMinutes;
    let seconds = j+props.sessionLengthSeconds;
    let time=minutes+":"+seconds;
    props.sessionLengthMinutes<1?(color="red"):(color="white");
    return (
        <div style={{color:color}} className="Timer">
            <p id="timer-label">{props.timerStatus}</p>
            <p id="time-left">{time}</p>
            <audio id="beep" preload="auto" loop src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}

export default timer;