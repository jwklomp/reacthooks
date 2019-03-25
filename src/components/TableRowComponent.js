/* eslint-disable require-jsdoc */
import React from "react";

const TableRowComponent = props =>
    <tr>
        <td>{props.item.name}</td>
        <td>{props.item.gender}</td>
        <td></td>
    </tr>

export default TableRowComponent;