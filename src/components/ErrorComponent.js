/* eslint-disable require-jsdoc */
import React from "react";

const ErrorComponent = props =>
    <div className="row">Error: {props.error.message}</div>;

export default ErrorComponent;