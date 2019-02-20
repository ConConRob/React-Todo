import React from 'react';

export default class TodoForm extends React.Component {    
    state= {
        currentInput: ''
    }
    updateInput = (event) => {
        this.setState({currentInput: event.target.value})
    }
    
    clickAddTodo = () => {
        this.props.addTodoToItems(this.state.currentInput)
    }

    pressEnter = (event) => {
        if(event.key ==='Enter') {
            this.props.addTodoToItems(this.state.currentInput)
        }
    }

    clearCompleted = () => {
        this.props.deleteCompleted();
    }
    
    render() {
        return (
            <div >
                <input onChange={this.updateInput} onKeyPress={this.pressEnter} type="text" value={this.state.currentInput} />
                <button onClick={this.clickAddTodo} >Add Todo</button>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </div>
        )
        
    }
}
