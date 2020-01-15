import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <input type="checkbox" checked={todo.done} /> {todo.name}
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired
};

export default Todo;
