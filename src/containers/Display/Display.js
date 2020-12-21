import React, { Component } from "react";
import SetupBlock from "../../components/SetupBlock/SetupBlock";
import Timer from "../../components/Timer/Timer";
import FunctionBlock from "../../components/FunctionBlock/FunctionBlock"
class Display extends Component {

    state = {
        sessionLength: 25,
        minutes: 5,
        seconds: 0,
        breakLength: 5,
        timerStarted: false,
        intervalId: "", // this is required to get the setInterval later
        timerStatus: "Break"
    }

    
    incrementHandler = (event) => {
        // let id = event.target.parentElement.previousSibling.id;
        if(!this.state.timerStarted){
            if (event === "break" && this.state.breakLength < 60) {
                this.setState((prevState) => ({
                    // ...prevState,
                    breakLength: prevState.breakLength + 1
                }),()=>{
                    if(this.state.timerStatus==="Break"){
                        this.setState(prevState=>({
                            minutes: prevState.breakLength,
                            seconds: 0

                        }))
                    }
                })
            }
            else if (event === "session" && this.state.sessionLength < 60) {
    
                this.setState((prevState) => ({
                    // ...prevState,
                    sessionLength: prevState.sessionLength + 1
                }),()=>{
                    if(this.state.timerStatus==="Session"){
                        this.setState(prevState=>({
                            minutes: prevState.sessionLength,
                            seconds: 0
                        }))
                    }
                })
            }
        }
    }

    decrementHandler = (event) => {
        if(!this.state.timerStarted){
            // let id = event.target.parentElement.nextSibling.id;
            if (event === "break" && this.state.breakLength > 1) {
                this.setState((prevState) => ({
                    // ...prevState,
                    breakLength: prevState.breakLength - 1
                }),()=>{
                    if(this.state.timerStatus==="Break"){
                        this.setState(prevState=>({
                            minutes: prevState.breakLength,
                            seconds: 0
                        }))
                    }
                })
            }
            else if (event === "session" && this.state.sessionLength > 1) {
                this.setState((prevState) => ({
                    // ...prevState,
                    sessionLength: prevState.sessionLength - 1,
    
                }),()=>{
                    if(this.state.timerStatus==="Session"){
                        this.setState(prevState=>({
                            minutes: prevState.sessionLength,
                            seconds: 0
                        }))
                    }
                })
            }
        }
    }

    startStopHandler = () => {
        this.setState((prevState) => ({
            ...prevState,
            timerStarted: !prevState.timerStarted
        }), () => {
            this.runTimer();
        })
    }

    runTimer() {
        if (this.state.timerStarted === true) {
            let intervalId = setInterval(() => {
                if (this.state.seconds === 0) {
                    this.setState((prevState) => ({
                        ...prevState,
                        minutes: prevState.minutes - 1,
                        seconds: 60
                    }))
                }
                this.setState((prevState) => ({
                    ...prevState,
                    seconds: (prevState.seconds - 1)
                }), () => {
                    if (this.state.minutes === 0 && this.state.seconds === 0) {
                            this.changeTimerStatus();
                    }
                })
            }, 1);
            this.setState(prevState => ({
                ...prevState,
                intervalId: intervalId
            }))
        }
        else if (!this.state.timerStarted || (this.state.minutes === 0 && this.state.seconds === 0)) {
            clearInterval(this.state.intervalId);
        }
    }

    resetHandler = () => {
        this.resetFunction();
    }

    resetFunction() {
        clearInterval(this.state.intervalId);
            this.setState({
                sessionLength: 25,
                breakLength: 5,
                minutes: 25,
                seconds: 0,
                timerStarted: false,
                timerStatus: "Session",
                intervalId:""
            })
    }

    changeTimerStatus() {
        clearInterval(this.state.intervalId);
        let signal = document.getElementById("beep");
        signal.play();
        let newStatus = this.state.timerStatus;
        newStatus === "Session" ? newStatus = "Break" : newStatus = "Session";
        if (newStatus === "Session") {
            this.setState(prevState => ({
                ...prevState,
                timerStatus: newStatus,
                minutes: prevState.sessionLength,
                seconds: 0,
                timerStarted: true
            }), () => {
                this.runTimer();

            })
        } else {
            this.setState(prevState => ({
                ...prevState,
                timerStatus: newStatus,
                minutes: prevState.breakLength,
                seconds: 0,
                timerStarted: true
            }), () => {
                this.runTimer();
            })
        }
        setTimeout(() => {
            signal.pause();
        }, 2000);
    }

    render() {
        return (
            <div className="Display">
                <div className="SetupBlock">
                    <SetupBlock idLabel="break-label" nameLabel="Break Length" decrId="break-decrement" decrIconClass="fa fa-arrow-down"
                        incrId="break-increment" incrIconClass="fa fa-arrow-up"
                        lengthId="break-length" lengthValue={this.state.breakLength}
                        lengthIncrease={()=>this.incrementHandler("break")} lengthDecrease={()=>this.decrementHandler("break")}
                    />
                    <SetupBlock idLabel="session-label" nameLabel="Session Length" decrId="session-decrement" decrIconClass="fa fa-arrow-down"
                        incrId="session-increment" incrIconClass="fa fa-arrow-up"
                        lengthId="session-length" lengthValue={this.state.sessionLength}
                        lengthIncrease={()=>this.incrementHandler("session")} lengthDecrease={()=>this.decrementHandler("session")}
                    />
                </div>
                <Timer timerProcessStatus={this.state.timerStarted}
                    timerStatus={this.state.timerStatus} sessionLengthMinutes={this.state.minutes} sessionLengthSeconds={this.state.seconds} />
                <FunctionBlock startStopClicked={this.startStopHandler} resetClicked={this.resetHandler} />
            </div>
        )
    }
}

export default Display;