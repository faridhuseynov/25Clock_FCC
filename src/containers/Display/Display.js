import React, { Component } from "react";
import SetupBlock from "../../components/SetupBlock/SetupBlock";
import Timer from "../../components/Timer/Timer";
import FunctionBlock from "../../components/FunctionBlock/FunctionBlock"
class Display extends Component {

    state = {
        sessionLength: 25,
        minutes: 25,
        seconds: 0,
        breakLength: 5,
        timerStarted: false,
        intervalId: "", // this is required to get the setInterval later
        timerStatus: "Session"
    }

    // componentWillUnmount(){
    //     clearInterval(this.state.intervalId);
    // }

    incrementHandler = (event) => {
        let id = event.target.parentElement.previousSibling.id;
        if (id === 'break-length' && this.state.breakLength < 61) {
            this.setState((prevState) => ({
                ...prevState,
                breakLength: prevState.breakLength + 1,
                minutes: prevState.breakLength + 1,
                seconds: 0
            }), () => {
                // console.log(this.state.breakLength);
            })
        }
        else if (id === 'session-length' && this.state.sessionLength < 60) {

            this.setState((prevState) => ({
                ...prevState,
                sessionLength: prevState.sessionLength + 1,
                minutes: prevState.sessionLength + 1,
                seconds: 0
            }), () => {
                // console.log(this.state.sessionLength);
            })
        }
    }

    decrementHandler = (event) => {
        let id = event.target.parentElement.nextSibling.id;
        if (id === 'break-length' && this.state.breakLength > 1) {
            this.setState((prevState) => ({
                ...prevState,
                breakLength: prevState.breakLength - 1,
                minutes: prevState.breakLength - 1,
                seconds: 0
            }), () => {
                // console.log(this.state.breakLength);
            })
        }
        else if (id === 'session-length' && this.state.sessionLength > 1) {
            this.setState((prevState) => ({
                ...prevState,
                sessionLength: prevState.sessionLength - 1,
                minutes: prevState.sessionLength - 1,
                seconds: 0

            }), () => {
                console.log(this.state.minutes);
            })
        }
    }

    startStopHandler = () => {
        this.setState((prevState) => ({
            ...prevState,
            timerStarted: !prevState.timerStarted
        }), () => {
            console.log(this.state.timerStarted);
            this.runTimer();
        })
    }

    runTimer() {
        if (this.state.timerStarted === true) {
            //&& !(this.state.minutes===0 && this.state.seconds===0)
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
                        console.log('end');
                        this.setState(prevState => ({
                            ...prevState,
                            timerStarted: false
                        }), () => {
                            this.changeTimerStatus();
                        })
                    }
                })
                // console.log('test');
            }, 100);
            console.log(this.state.minutes);
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
        if (!this.state.timerStarted) {
            this.setState({
                sessionLength: 25,
                breakLength: 5,
                minutes: 25,
                seconds: 0,
                timerStarted: false,
                timerStatus: "Session"
            })
        }
    }

    changeTimerStatus() {
        clearInterval(this.state.intervalId);
        let signal = document.getElementById("beep");
        signal.play();
        let newStatus = this.state.timerStatus;
        newStatus === "Session" ? newStatus = "Break" : newStatus = "Session";
        setTimeout(() => {
            signal.pause();
            if (newStatus === "Session") {
                this.setState(prevState => ({
                    ...prevState,
                    timerStatus: newStatus,
                    minutes: prevState.sessionLength,
                    seconds: 0,
                    timerStarted: true
                }), () => {
                    console.log(this.state.timerStatus, this.state.timerStarted);
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
                    console.log(this.state.timerStatus, this.state.timerStarted);
                    this.runTimer();
                })
            }
        }, 2000);
    }

    render() {
        let source = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
        // this.setState({
        //     audio:audio
        // })
        return (
            <div className="Display">
                <div className="SetupBlock">
                    <SetupBlock idLabel="break-label" nameLabel="Break Length" decrId="break-decrement" decrIconClass="fa fa-arrow-down"
                        incrId="break-increment" incrIconClass="fa fa-arrow-up"
                        lengthId="break-length" lengthValue={this.state.breakLength} lengthIncrease={this.incrementHandler} lengthDecrease={this.decrementHandler}
                    />
                    <SetupBlock idLabel="session-label" nameLabel="Session Length" decrId="session-decrement" decrIconClass="fa fa-arrow-down"
                        incrId="session-increment" incrIconClass="fa fa-arrow-up"
                        lengthId="session-length" lengthValue={this.state.sessionLength} lengthIncrease={this.incrementHandler} lengthDecrease={this.decrementHandler}
                    />
                </div>
                <Timer timerProcessStatus={this.state.timerStarted}
                    timerStatus={this.state.timerStatus} sessionLengthMinutes={this.state.minutes} sessionLengthSeconds={this.state.seconds} />
                <FunctionBlock startStopClicked={this.startStopHandler} resetClicked={this.resetHandler} />
                {/* {this.state.timerStarted===true?(<audio id="beep" preload="auto" autoplay loop src={source}></audio>):(<audio id="beep" preload="auto" src={source}></audio>)} */}
                <audio id="beep" preload="auto" loop src={source}></audio>
            </div>
        )
    }
}

export default Display;