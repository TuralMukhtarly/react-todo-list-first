import React, { useState } from 'react'

type OnPropsType = {
    on: boolean
}

function OnOff(props: OnPropsType) {

    const [on, setOn] = useState(props.on)

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "10px",
        backgroundColor: on === true ? "green" : "white",
        display: "inline-block"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "10px",
        backgroundColor: on === false ? "red" : "white",
        display: "inline-block"
    }

    const indicatorStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "10px",
        display: "inline-block",
        backgroundColor: on === true ? "green" : "red",
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(!on)}}>on</div>
            <div style={offStyle} onClick={() => setOn(!on)}>off</div>
            <div style={indicatorStyle} onClick={() => setOn(!on)}>*</div>
        </div>
    )
}

export default OnOff
