import React from "react";

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: 'people', searchTerm: null };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    // get new data
  }

  render() {
    return (
      <form>
        <label>
          Pick your Star Wars Subject:
            <select value={this.state.subject} onChange={this.handleChange}>
            <option value="films">Movies</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </label>
        <label>
          Enter a filter term:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}