import React from "react";
import * as DataUtils from './../utils/DataUtils'
export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: 'people', searchTerm: "" };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name, value);
    this.setState({
      [name]: value
    });
    // get new data
  }

  render() {
    return (
      <div className='row'>
      <div className="btn-group" role="group" aria-label="Basic example">
        <label>
          Pick your Star Wars Subject:
          <select name="subject" value={this.state.subject} onChange={this.handleChange}>
            {DataUtils.subjects.map(item =>
              <option value={item.key} selected={this.state.subject === item.key}>{item.value}</option>
            )}
          </select>
        </label>
        <label>
          Enter a filter term:
            <input name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </label>
      </div>
      </div>
    );
  }
}