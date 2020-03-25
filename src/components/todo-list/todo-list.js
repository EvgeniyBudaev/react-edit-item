import React, { Component } from 'react';
import TodoItem from '../todo-item';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDeleteItem, handleEditItem } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDeleteItem={() => handleDeleteItem(item.id)}
              handleEditItem={() => handleEditItem(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
