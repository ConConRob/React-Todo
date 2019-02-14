import React from 'react';
import './Todo.css'
export default function Todo ({todo, markItemAsDone, completed}){
    return (
        <li onClick={() =>markItemAsDone(todo.id)} className={`completed-${completed}`}>{todo.task}</li>
    )
}