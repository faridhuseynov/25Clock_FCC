import React, { Component } from "react";
import SetupBlock from "../../components/SetupBlock/SetupBlock";
import Timer from "../../components/Timer/Timer";
import FunctionBlock from "../../components/FunctionBlock/FunctionBlock"
class Display extends Component {

    state = {
        sessionLength: 25,
        minutes:"25",
        seconds:"00",
        breakLength: 5,
        timerStarted:false,
        intervalId:"", // this is required to get the setInterval later
        timerStatus:"Session"
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }
    incrementHandler = (event) => {
       let id = event.target.parentElement.previousSibling.id;
        if(id==='break-length' && this.state.breakLength<61){
            this.setState((prevState) => ({
                ...prevState,
                breakLength: prevState.breakLength + 1
            }), () => {
                // console.log(this.state.breakLength);
            })
        }
        else if(id==='session-length' && this.state.sessionLength<60){
            this.setState((prevState) => ({
                ...prevState,
                sessionLength: prevState.sessionLength + 1,
                minutes:prevState.minutes+1
            }), () => {
                // console.log(this.state.sessionLength);
            })
        }
    }

    decrementHandler = (event) => {
        let id = event.target.parentElement.nextSibling.id;
         if(id==='break-length' && this.state.breakLength>1){
             this.setState((prevState) => ({
                 ...prevState,
                 breakLength: prevState.breakLength -1
             }), () => {
                 // console.log(this.state.breakLength);
             })
         }
         else if(id==='session-length' && this.state.sessionLength>1){
             this.setState((prevState) => ({
                 ...prevState,
                 sessionLength: prevState.sessionLength -1,
                 minutes:prevState.minutes-1

             }), () => {
                 // console.log(this.state.sessionLength);
             })
         }
     }

    startStopHandler = () => {
        let i="";
        this.setState((prevState) => ({
            ...prevState,
            timerStarted: !prevState.timerStarted
        }), () => {
            console.log(this.state.timerStarted);
            if (this.state.timerStarted === true) {
                let intervalId = setInterval(() => {
                    if(this.state.seconds==='00'){
                        this.setState((prevState)=>({
                            ...prevState,
                            minutes:prevState.minutes-1,
                            seconds:60
                        }))
                    }
                    if(this.state.seconds<=10){
                        i="0";
                    }
                    this.setState((prevState) => ({
                        ...prevState,
                        seconds: i+(prevState.seconds - 1)
                    }))
                    console.log('test');
                }, 1000);

                console.log(this.state.minutes);
                this.setState(prevState => ({
                    ...prevState,
                    intervalId: intervalId
                }))
            }
            else if (!this.state.timerStarted) {
                clearInterval(this.state.intervalId);
            }
        })
    }

     resetHandler=()=>{
         this.resetFunction();
     }

     resetFunction(){
         if(!this.state.timerStarted){
             this.setState({
                sessionLength: 25,
                breakLength: 5,
                minutes:"25",
                seconds:"00",
                timerStarted:false,
                timerStatus:"Session"
             })
         }
     }

    render() {
        return (
            <div>
                <SetupBlock  idLabel="break-label" nameLabel="Break Length" decrId="break-decrement" decrIconClass="fa fa-arrow-down"
                    incrId="break-increment" incrIconClass="fa fa-arrow-up"
                    lengthId="break-length" lengthValue={this.state.breakLength} lengthIncrease={this.incrementHandler} lengthDecrease={this.decrementHandler}
                />
                <SetupBlock idLabel="session-label" nameLabel="Session Length" decrId="session-decrement" decrIconClass="fa fa-arrow-down"
                    incrId="session-increment" incrIconClass="fa fa-arrow-up"
                    lengthId="session-length" lengthValue={this.state.sessionLength} lengthIncrease={this.incrementHandler} lengthDecrease={this.decrementHandler}
                />
                <Timer timerProcessStatus={this.state.timerStarted} 
                timerStatus={this.state.timerStatus} sessionLengthMinutes={this.state.minutes} sessionLengthSeconds={this.state.seconds}/>
                <FunctionBlock startStopClicked={this.startStopHandler} resetClicked={this.resetHandler}/>
            </div>
        )
    }
}

export default Display;