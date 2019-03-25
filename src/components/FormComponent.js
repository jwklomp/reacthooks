import React from "react";
import * as DataUtils from './../utils/DataUtils'
export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: 'people', searchTerm: "" };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.subject !== prevState.subject || this.state.searchTerm !== prevState.searchTerm) {
      this.props.onChange(this.state.subject, this.state.searchTerm);
    }
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name, value);
    this.setState({
      [name]: value
    });

  }

  render() {
    return (
      <form>
        <div className="form-row">
          <div className="formGroup col-md-3">
            <label>
              Pick your Star Wars Subject:
          <select name="subject" className="form-control" value={this.state.subject} onChange={this.handleChange}>
                {DataUtils.subjects.map(item =>
                  <option value={item.key} selected={this.state.subject === item.key}>{item.value}</option>
                )}
              </select>
            </label>
          </div>
          <div className="formGroup col-md-3">
            <label>
              Enter a filter term:
          <input name="searchTerm" className="form-control" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
            </label>
          </div>
        </div>
      </form>
    );
  }
}