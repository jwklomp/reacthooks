/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

const SpinnerComponent = props =>
    <div className="message">{props.text}</div>;

export default SpinnerComponent;

SpinnerComponent.propTypes = {
    text: PropTypes.string
}