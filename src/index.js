import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// s
import * as serviceWorker from './serviceWorker';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', todoList: ["blah", "something"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  createNewTodo() {
    if (this.state.value !== "") {
      let temp = this.state.todoList;
      temp.push(this.state.value);
      this.setState({todoList: temp, value: ''});
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
            {this.state.todoList.map(item => (
              <li key={item.toString()}>{item}</li>
            ))}
        </ul>
        Todo:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input
          type="button"
          onClick={this.createNewTodo}
        />
      </div>
      
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
