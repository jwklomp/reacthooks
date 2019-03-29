/* eslint-disable require-jsdoc */
import React from "react";
import * as DataUtils from './../utils/DataUtils'
import PropTypes from "prop-types";

const TableHeaderComponent = props =>
    <thead>
        <tr>
            {DataUtils.fieldsPerSubjectMap.get(props.subject).map(item => <th scope="col">{item.replace("_", " ")}</th>)}
        </tr>
    </thead>

export default TableHeaderComponent;

TableHeaderComponent.propTypes = {
    subject: PropTypes.string.isRequired
}