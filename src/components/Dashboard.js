import React from "react";
import ErrorComponent from './ErrorComponent';
import SpinnerComponent from './SpinnerComponent';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';
import * as DataUtils from './../utils/DataUtils'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    DataUtils.getStarWarsData("people", "", this.onSuccess, this.onError);
  }

  onSuccess = (results, subject) =>
    this.setState({
      isLoaded: true,
      items: results,
      subject
    });

  onError = (error) =>
    this.setState({
      isLoaded: true,
      error
    });

  onChange = (subject, searchTerm) => { 
    this.setState({
      isLoaded: false,
      error: null
    });
    DataUtils.getStarWarsData(subject, searchTerm, this.onSuccess, this.onError);
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className='container'>
        <div className="row header">
          <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star"></img>
          <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"></img>
        </div>
        <div className='row'>
          <h2 className="subtitle">If an item does not appear in our records, then is does not exist</h2>
        </div>
        <FormComponent onChange={this.onChange} />
        {error ? <ErrorComponent error={error} /> : null}
        {!error && !isLoaded ? (
          <SpinnerComponent text="Loading Star Wars Data..." />
        ) : null}
        {!error && isLoaded ? (
          <TableComponent data={items} 
          title="The following results have been found" 
          subject={this.state.subject} 
          headerFields={DataUtils.fieldsPerSubjectMap.get(this.state.subject)}/>
        ) : null}
      </div>
    );
  }
}