import React, { Component } from "react";
import TodoInput from "../todo-input";
import TodoList from "../todo-list";
import uuid from "react-uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newItem);

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDeleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEditItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id)
        this.setState({
          items: filteredItems,
          item: selectedItem.title,
          editItem: true,
          id: id
        });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">ToDo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDeleteItem={this.handleDeleteItem}
              handleEditItem={this.handleEditItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
