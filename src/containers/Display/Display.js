import React, { Component } from "react";
import SetupBlock from "../../components/SetupBlock/SetupBlock";
import Timer from "../../components/Timer/Timer";
import FunctionBlock from "../../components/FunctionBlock/FunctionBlock"
class Display extends Component {

    state = {
        sessionLength: 25,
        breakLength: 5,
        timerStarted:false,
        timerStatus:"Session"
    }

    incrementHandler = (event) => {
       let id = event.target.parentElement.previousSibling.id;
        if(id==='break-length'){
            this.setState((prevState) => ({
                ...prevState,
                breakLength: prevState.breakLength + 1
            }), () => {
                // console.log(this.state.breakLength);
            })
        }
        else if(id==='session-length'){
            this.setState((prevState) => ({
                ...prevState,
                sessionLength: prevState.sessionLength + 1
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
                 sessionLength: prevState.sessionLength -1
             }), () => {
                 // console.log(this.state.sessionLength);
             })
         }
     }

     startStopHandler=()=>{
         this.setState((prevState)=>({
             ...prevState,
            timerStarted:!prevState.timerStarted
         }))
     }

     resetHandler=()=>{
         this.resetFunction();
     }

     resetFunction(){
         this.setState({
            sessionLength: 25,
            breakLength: 5,
            timerStarted:false,
            timerStatus:"Session"
         })
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
                <Timer statusId="timer-label" timeStatusId="time-left" timerStatus={this.state.timerStatus} sessionLength={this.state.sessionLength}/>
                <FunctionBlock startStopClicked={this.startStopHandler} resetClicked={this.resetHandler}/>
            </div>
        )
    }
}

export default Display;