import React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import "./Item.scss";

const Item = ({ text, complete, itemsState, setItems, location }) => {
  function completed() {
    //go through itemsState array, find object in question
    //update objects complete property

    let copyOfItems = [...itemsState];

    // for (const item of copyOfItems){
    //   if (item.text === text){
    //     item.complete = true;
    //   }
    // }
    copyOfItems[location].complete = true;

    setItems((prevState) => [
      ...prevState.slice(0, location),
      { text, complete: true },
      ...prevState.slice(location + 1)
    ]);
  }

  return (
    <li className="list-group-item">
      <div className="todo-item">
        <div className={classNames("item-text", { strikethrough: complete })}>
          {text}
        </div>
        <div className="item-controls">
          <button onClick={completed} className="btn btn-success">
            Complete
          </button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  text: PropTypes.string,
  complete: PropTypes.bool
};

Item.defaultProps = {
  complete: false
};

export default Item;
