import React from "react"
import classes from "./FunctionBlock.module.css"

const functionBlock =(props)=>{
    return(
        <div className={classes.FunctionBlock}>
            <div id="start_stop" onClick={props.startStopClicked}><i className="fa fa-play"></i><i className="fa fa-pause"></i></div>
            <div id="reset" onClick={props.resetClicked}><i style={{marginLeft:"10px"}} className="fa fa-refresh"></i></div>

        </div>
    )
}

export default functionBlock;