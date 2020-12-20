import React from "react"

const timer = (props) => {
    return (
        <div>
            <p id="timer-label">{props.timerStatus}</p>
            <p id="time-left">{props.sessionLengthMinutes} : {props.sessionLengthSeconds}</p>
        </div>
    )
}

export default timer;

// import React, { Component } from "react"

// class Timer extends Component {
//     constructor(props){
//         super(props)
//     };
//     // state = {
//     //     // processStatus: props.timerProcessStatus,
//     //     proccessStatus:this.props.timerProcessStatus,
//     //     minutes: this.props.sessionLength,
//     //     seconds:0,
//     //     timerStatus: "Session"
//     // }

//     shouldComponentUpdate(){
//         console.log(this.props.timerProcessStatus);
//         if(this.props.timerProcessStatus){
//             return true;
//         }else{
//             return false;
//         }
//     }

//     countDown() {
//         this.setState(prevState=>({
//             minutes: prevState.minutes - 1
//         }))
//     }
//     render() {
//         {
//             console.log(this.props.timerProcessStatus);
//             // if(this.state.proccessStatus){
//             //     setTimeout(() => {
//             //         this.countDown();

//             //     }, 2000);
//             // }
//         }
//         return (
//             <div>
//                 <p id="timer-label">{this.state.timerStatus}</p>
//                 <p id="time-left">{this.state.minutes} : {this.state.seconds}</p>
//             </div>
//         )
//     }
// }


// export default Timer;
// // {if(this.state.processStatus === true){
// //     setTimeout(() => {
// //         console.log(processStatus);
// //         this.countDown();
// //     }, 1000)
// // }}