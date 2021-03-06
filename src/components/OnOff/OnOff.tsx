import React from "react";


type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export const OnOff = (props: PropsType) => {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "",
        cursor: "pointer"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "" : "red",
        cursor: "pointer"
    }
    const lampStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "5px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red"
    }
    return (
        <div>
            {/*On*/}
            <div className="on">
                <div style={onStyle} onClick={()=>{props.onChange(true)}} >ON</div>
                <div style={offStyle} onClick={()=>{props.onChange(false)}} >OFF</div>
                <div style={lampStyle}/>
            </div>
        </div>
    )
}