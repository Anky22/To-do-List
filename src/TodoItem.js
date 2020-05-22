import React from "react"

function TodoItem(props) {
    //console.log(props);
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        backgroundColor : '#EEE9E8'
    }
    return (
        <div className="todo-item" style={props.item.completed ? completedStyle: null}>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <h4><p>{props.item.text}</p></h4>
            <div className="col col-end">
            <div className="icon" onClick={() => props.handleDelete(props.item.id)} style={{color:"red"}}>clear</div>
            </div>
        </div>
    )
}

export default TodoItem