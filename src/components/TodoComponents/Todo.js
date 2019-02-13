import React from 'react';

export default function Todo ({todo}){
    return (
        <li className={`completed-${todo.completed}`}>{todo.task}</li>
    )
}