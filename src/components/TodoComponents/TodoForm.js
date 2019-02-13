import React from 'react';

export default class TodoForm extends React.Component {
    state= {
        currentInput: ''
    }
    
    updateInput = (event) => {
        this.setState({currentInput: event.target.value})
    }
    render() {
        return (
            <form>
                <input onChange={this.updateInput} type="text" value={this.state.currentInput} />
                <button >Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
        
    }
}
