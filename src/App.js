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

  markItemAsDone = (id) => {
    this.setState( lastState => ({items:lastState.items.map(item => {
      if(item.id===id) {
        return item.completed? 
          { task: item.task, id, completed: false}:
          { task: item.task, id, completed: true}
      }
      return item;
    })}), () => console.log(this.state));
  }
      
  deleteCompleted = () => {
    console.log(this.state.items);
    this.setState(lastState =>({items :lastState.items.filter(item =>{
      console.log(item.completed);
      return !item.completed;
    })}));
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList markItemAsDone={this.markItemAsDone} todos={this.state.items} />
        <TodoForm deleteCompleted={this.deleteCompleted} addTodoToItems={this.addTodoToItems}/>
      </div>
    );
  }
}

export default App;
