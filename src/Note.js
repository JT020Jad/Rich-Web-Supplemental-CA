import React from "react";

const Note = (props) => 
{
    const { color, noteText, id } = props.text;

    // Calculate the position for sub-notes
    const positionStyle = 
    {
        position: "relative",
        marginLeft: "80px",
        marginTop: "20px",
    };

    return(
        <div style={positionStyle}>
            <div style={{backgroundColor: color, width: "40%"}}>{noteText}</div>
            <input 
                type={"button"} 
                value={"Add Child Note"} 
                onClick= {() => {props.addChild(props.text.id)}}>
            </input>

            <input 
                type={"button"} 
                value={"Edit Note"} 
                onClick= {() => {props.edit(props.text.id)}}>
            </input>

            <input 
                type={"button"} 
                value={"Delete Note"} 
                onClick= {() => {props.delete(props.text.id)}}>
            </input>

            <input 
                type={"button"} 
                value={"blue"} 
                onClick= {() => {props.changeColor(props.text.id, "blue")}}>
            </input>

            <input 
                type={"button"} 
                value={"white"} 
                onClick= {() => {props.changeColor(props.text.id, "white")}}>
            </input>

            <input 
                type={"button"} 
                value={"green"} 
                onClick= {() => {props.changeColor(props.text.id, "green")}}>
            </input>

            <input 
                type={"button"} 
                value={"red"} 
                onClick= {() => {props.changeColor(props.text.id, "red")}}> 
            </input>


            {props.children && props.children.map((child) => (
            <Note
            key={child.id}
            //{...child}
            text={child}
            delete={props.delete}
            addChild={props.addChild}
            edit={props.edit}
            changeColor={props.changeColor}
            />
            ))}   
        </div>
    )
}


export default Note;