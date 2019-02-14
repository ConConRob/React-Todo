// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, markItemAsDone}) {
    return(
        <ul>
            {todos.map(todo => <Todo markItemAsDone={markItemAsDone} completed={todo.completed} key={todo.id} todo={todo} />)}
        </ul>
        
    )
    
}