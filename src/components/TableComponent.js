/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import TableRowComponent from "./TableRowComponent"
import TableHeaderComponent from "./TableHeaderComponent";

const TableComponent = props =>
  <div className='row'>
    <h2>{props.title}</h2>
    <table className="table table-dark">
      <TableHeaderComponent subject={props.subject}/>
      <tbody>
        {props.data.map(item => <TableRowComponent item={item} key={item.name} />)}
      </tbody>
    </table>
  </div>;

export default TableComponent;

TableComponent.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired
}