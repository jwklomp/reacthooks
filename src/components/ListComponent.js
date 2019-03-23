/* eslint-disable require-jsdoc */
import React from "react";
import ListItemComponent from "./ListItemComponent"

const ListComponent = props =>
  <div>
    <h2 className="row">{props.title}</h2>
    <ul className="row">
      {props.data.map(item => <ListItemComponent item={item} key={item.name} />)}
    </ul>
  </div>;

export default ListComponent;