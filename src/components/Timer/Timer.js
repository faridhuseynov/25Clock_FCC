import React, { Component } from "react"

class Timer extends Component {
    state = {
        // processStatus: props.timerProcessStatus,
        proccessStatus:true,
        time: 25,
        timerStatus: "Session"
    }


    countDown() {
        this.setState(prevValue=>({
            time: prevValue - 1
        }))
    }
    render() {
        {
            if(this.state.proccessStatus){
                setTimeout(() => {
                    this.countDown();
                }, 1000);
            }
        }
        return (
            <div>
                <p id="timer-label">{this.state.timerStatus}</p>
                <p id="time-left">{this.state.time}</p>
            </div>
        )
    }
}


export default Timer;
// {if(this.state.processStatus === true){
//     setTimeout(() => {
//         console.log(processStatus);
//         this.countDown();
//     }, 1000)
// }}