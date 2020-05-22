import React from 'react';
import TodoItem from "./TodoItem";
import "./Todo.css"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import "./Labels.css"

function renderBody(todoItems){
    if(todoItems.length > 0)
    return <div className="todo-list">{todoItems}</div>
    else
    return <div className="todo-list">No Tasks to Display</div>
}

function Labels(props){
    const todoItems = props.todos.filter(item => item.label === props.label).map(item => <TodoItem key={item.id} item={item} handleDelete={props.handleDelete} handleChange={props.handleChange}/>)
    return (
        <Accordion align="center" allowZeroExpanded='true'>
            <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                        <b>{props.label}</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    {renderBody(todoItems)}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Labels;