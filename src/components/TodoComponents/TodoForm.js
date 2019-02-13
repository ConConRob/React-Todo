import React from 'react';

export default class TodoForm extends React.Component {
    
        
        state= {
            currentInput: ''
        }
        
    
   
    
    updateInput = (event) => {
        this.setState({currentInput: event.target.value})
    }
    
    clickAddTodo = () => {
        console.log('here');
        this.props.addTodoToItems(this.state.currentInput)
    }

    render() {

        return (
            <div>
                <input onChange={this.updateInput} type="text" value={this.state.currentInput} />
                <button onClick={this.clickAddTodo} >Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
        
    }
}
