import React, { Component } from 'react';
import '../App.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAddTodo = () => {
    const { input, todos } = this.state;
    if (input.trim()) {
      this.setState({
        todos: [...todos, { text: input, completed: false }],
        input: ''
      });
    }
  };

  handleToggleTodo = (index) => {
    const newTodos = this.state.todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: newTodos });
  };

  handleDeleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    });
  };

  render() {
    const { todos, input } = this.state;

    return (
      <div className="App">
        <h1>Todo Management Application</h1>
        <div>
          <input
            type="text"
            value={input}
            onChange={this.handleInputChange}
            placeholder="Add a new todo"
          />
          <button className="add" onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <span onClick={() => this.handleToggleTodo(index)}>{todo.text}</span>
              <button className="delete" onClick={() => this.handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
