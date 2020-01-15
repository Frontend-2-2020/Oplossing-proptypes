import React, { Component } from "react";
import Axios from "axios";
import Todo from "./components/Todo";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    todos: [],
    loading: true
  };

  componentDidMount() {
    Axios.get("https://5de80f759578cb001487adea.mockapi.io/Todo")
      .then(response => {
        const todos = response.data.map(todo => {
          todo.id = parseInt(todo.id);
          return todo;
        });

        this.setState({ todos: todos });
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { todos, loading } = this.state;
    return (
      <div>
        <Loader loading={loading} />

        {!loading && todos.length === 0 && <div>No todo's found...</div>}

        {todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}

export default App;
