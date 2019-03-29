/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

const TableHeaderComponent = props =>
    <thead>
        <tr>
            {props.headerFields.map(item => <th scope="col">{item.replace("_", " ")}</th>)}
        </tr>
    </thead>

export default TableHeaderComponent;

TableHeaderComponent.propTypes = {
    headerFields: PropTypes.array.isRequired
}