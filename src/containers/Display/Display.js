import React, { Component } from "react";
import Label from "../../components/Label/Label";
import Decrement from "../../components/Decrement/Decrement"
import Increment from "../../components/Increment/Increment"

class Display extends Component {


    render() {
        return (
            <div>
                <Label labelId="break-label" labelName="Break Length" />
                <Label labelId="session-label" labelName="Session Length" />
                <Decrement id="break-decrement" iconClass="fa fa-arrow-down"/>
                <Decrement id="session-decrement" iconClass="fa fa-arrow-down"/>
                <Increment id="break-increment" iconClass="fa fa-arrow-up"/>
                <Increment id="session-increment" iconClass="fa fa-arrow-up"/>
            </div>
        )
    }
}

export default Display;