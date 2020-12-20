import React, { Component } from "react";
import Block from "../../components/Block/Block";


class Display extends Component {

    state = {
        sessionLength: 1,
        breakLength: 1
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
        console.log(id);
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


    render() {
        return (
            <div>
                <Block  idLabel="break-label" nameLabel="Break Length" decrId="break-decrement" decrIconClass="fa fa-arrow-down"
                    incrId="break-increment" incrIconClass="fa fa-arrow-up"
                    lengthId="break-length" lengthValue={this.state.breakLength} lengthIncrease={this.incrementHandler} lengthDecrease={this.decrementHandler}
                />
                <Block idLabel="session-label" nameLabel="Session Length" decrId="session-decrement" decrIconClass="fa fa-arrow-down"
                    incrId="session-increment" incrIconClass="fa fa-arrow-up"
                    lengthId="session-length" lengthValue={this.state.sessionLength} lengthIncrease={this.incrementHandler} lengthDecrease={this.decrementHandler}
                />
            </div>
        )
    }
}

export default Display;