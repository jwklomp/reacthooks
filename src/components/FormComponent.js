import React, { useState } from "react";
import PropTypes from 'prop-types';
import * as DataUtils from './../utils/DataUtils'

const FormComponent = React.memo(props => {

  const [subject, setSubject] = useState('people');
  const [searchTerm, setSearchTerm] = useState('');

  props.onChange(subject, searchTerm);

  return (
    <form>
      <div className="form-row">
        <div className="formGroup col-md-6">
          <label>
            Pick your Star Wars Subject:
          <select name="subject" className="form-control" value={subject} onChange={e => setSubject(e.target.value)}>
              {DataUtils.subjects.map(item =>
                <option value={item.key} key={item.key}>{item.value}</option>
              )}
            </select>
          </label>
        </div>
        <div className="formGroup col-md-6">
          <label>
            Enter a filter term:
          <input name="searchTerm" className="form-control" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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