import React, { Component } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
  render() {
    const { title, handleDeleteItem, handleEditItem } = this.props;
    
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>

        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEditItem}>
            <FontAwesomeIcon icon={faPen} />
          </span>

          <span className="mx-2 text-danger" onClick={handleDeleteItem}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </li>
    );
  }
}
