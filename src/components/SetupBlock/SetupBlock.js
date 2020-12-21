import React from "react"
import Label from "../Label/Label";
import Decrement from "../Decrement/Decrement";
import Increment from "../Increment/Increment";
import Length from "../Length/Length";

const block =(props)=>{
    return <div>
        <Label labelId={props.idLabel} labelName={props.nameLabel} />
        <div  className="Block">
            <Decrement id={props.decrId} iconClass={props.decrIconClass} clicked={props.lengthDecrease}/>
            <Length id={props.lengthId} value={props.lengthValue}/>        
            <Increment id={props.incrId} iconClass={props.incrIconClass} clicked={props.lengthIncrease}/>
        </div>
    </div>
}

export default block;