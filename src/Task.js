import React from 'react'

function Task(props){
    return (
        <div>
            <h3>
                Task : {props.item.text}
                <br />
                Priority : {props.item.priority}
                <br />
                Status:{props.item.completed ? "Completed" : "Due" }   
                <br />
                Label:{props.item.label}    
            </h3>
        </div>
    )
}

export default Task; 