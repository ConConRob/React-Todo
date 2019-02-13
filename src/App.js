import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  state = {
    items: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
  }
  addTodoToItems = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false,
    }
    this.setState(state => ({items:state.items.concat(newItem)}));
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.items} />
        <TodoForm  addTodoToItems={this.addTodoToItems}/>
      </div>
    );
  }
}

export default App;
