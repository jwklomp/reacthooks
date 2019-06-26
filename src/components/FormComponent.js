import React, { useState } from "react";
import PropTypes from 'prop-types';
import * as DataUtils from './../utils/DataUtils'

// Using React.memo causes Component only to rerender when the props change. 
const FormComponent = React.memo(props => {

  // syntax: see https://reactjs.org/docs/hooks-reference.html#usestate
  const [subject, setSubject] = useState("people"); // initial value is set to "people"
  const [searchTerm, setSearchTerm] = useState(""); // initial value is set to ""

  const handleSetSubject = e => {
    setSubject(e.target.value);
    setSearchTerm("");
    props.onChange(e.target.value, "");
  }
  const handleSearchTerm = e => {
    setSearchTerm(e.target.value);
    props.onChange(subject, e.target.value);
  }

  return (
    <form>
      <div className="form-row">
        <div className="formGroup col-md-6">
          <label>
            Pick your Star Wars Subject:
          <select name="subject" className="form-control" value={subject} onChange={handleSetSubject}>
              {DataUtils.subjects.map(item =>
                <option value={item.key} key={item.key}>{item.value}</option>
              )}
            </select>
          </label>
        </div>
        <div className="formGroup col-md-6">
          <label>
            Enter a filter term:
          <input name="searchTerm" className="form-control" type="text" value={searchTerm} onChange={handleSearchTerm} />
          </label>
        </div>
      </div>
    </form>
  );
});

export default FormComponent;

FormComponent.propTypes = {
  onChange: PropTypes.func.isRequired
};