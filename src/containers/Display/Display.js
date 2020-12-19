import React, { Component } from "react";
import Label from "../../components/Label/Label";


class Display extends Component {

    
    render() {
        return (
            <div>
                <Label labelId="break-label" labelName="Break Length" />
                <Label labelId="session-label" labelName="Session Length" />
            </div>
        )
    }
}

export default Display;