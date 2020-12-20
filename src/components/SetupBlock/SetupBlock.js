import React from "react"
import Label from "../Label/Label";
import Decrement from "../Decrement/Decrement";
import Increment from "../Increment/Increment";
import Length from "../Length/Length";

import classes from "./SetupBlock.module.css";

const block =(props)=>{
    return <div className={classes.Block}>
        <Label labelId={props.idLabel} labelName={props.nameLabel} />
        <Decrement id={props.decrId} iconClass={props.decrIconClass} clicked={props.lengthDecrease}/>
        <Length id={props.lengthId} value={props.lengthValue}/>        
        <Increment id={props.incrId} iconClass={props.incrIconClass} clicked={props.lengthIncrease}/>
    </div>
}

export default block;