/* eslint-disable require-jsdoc */
import React from "react";
import TableRowComponent from "./TableRowComponent"
import * as DataUtils from './../utils/DataUtils'

const TableComponent = props =>
  <div className='row'>
    <h2>{props.title}</h2>
    <table className="table table-dark">
    <thead>
        <tr>
        {DataUtils.getProperties(props.data[0] || {}).map(item => <th scope="col">{item}</th>)} 
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => <TableRowComponent item={item} key={item.name} />)}
      </tbody>
    </table>
  </div>;

export default TableComponent;