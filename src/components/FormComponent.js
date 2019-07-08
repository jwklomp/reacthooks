import React from "react";
import PropTypes from 'prop-types';
import * as DataUtils from './../utils/DataUtils'

// note the extends React.Component
export default class FormComponent extends React.Component {

  // Class constructor used to set initial state of subject and searchTerm
  constructor(props) {
    super(props);
    this.state = { subject: 'people', searchTerm: "" };
  }

  // React lifecycle method to run the onChange function when the component did update
  // when subject or searchTerm changes, run the update in DashboardComponent
  componentDidUpdate(prevProps, prevState) {
    if (this.state.subject !== prevState.subject || this.state.searchTerm !== prevState.searchTerm) {
      this.props.onChange(this.state.subject, this.state.searchTerm);
    }
  }

  /**
   * Handles a DOM event
   * @param {Event} event interface, see https://developer.mozilla.org/en-US/docs/Web/API/Event
   */
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <div className="form-row">
          <div className="formGroup col-md-6">
            <label>
              Pick your Star Wars Subject:
          <select name="subject" className="form-control" value={this.state.subject} onChange={this.handleChange}>
                {DataUtils.subjects.map(item =>
                  <option value={item.key} selected={this.state.subject === item.key}>{item.value}</option>
                )}
              </select>
            </label>
          </div>
          <div className="formGroup col-md-6">
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

FormComponent.propTypes = {
  onChange: PropTypes.func.isRequired
};