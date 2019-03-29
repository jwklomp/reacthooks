/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = props =>
    <div className="row">Error: {props.error.message}</div>;

export default ErrorComponent;

ErrorComponent.propTypes = {
    error: PropTypes.object
};