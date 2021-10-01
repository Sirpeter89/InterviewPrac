import React from "react";
import Item from "./Item";
import "./TodoList.scss";
import { useState } from "react";

const TodoList = () => {
  const [items, setItems] = React.useState([
    { text: "finish this app", complete: true },
    { text: "send an invite", complete: false }
  ]);

  //store my string
  const [input, setInput] = useState("");

  function addToList() {
    let copyOfItems = [...items, { text: `${input}`, complete: false }];
    // setItems(copyOfItems);
    setItems((prevState) => [
      ...prevState,
      { text: `${input}`, complete: false }
    ]);
  }

  return (
    <div className="list">
      <div className="add-item">
        {/* Have to be able to store my input, useState*/}
        <textarea
          className="form-control"
          placeholder="Add an item.."
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <button onClick={addToList} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
      <h2>Todo:</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item
            key={index}
            location={index}
            text={item.text}
            complete={item.complete}
            itemsState={items}
            setItems={setItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
