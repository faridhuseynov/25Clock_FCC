import React from "react"

const length=(props)=>(
    <input value={props.value} id={props.id} minLength={1}/>
)


export default length;