import React from "react";
import ErrorComponent from './ErrorComponent';
import SpinnerComponent from './SpinnerComponent';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';
import * as DataUtils from '../utils/DataUtils'

export default class DashboardComponent extends React.Component {
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

  onError = error =>
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
    const { error, isLoaded, items, subject } = this.state;
    return (
      <div className='container'>
        <div className="row header">
          <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star"></img>
          <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"></img>
        </div>
        <div className='row'>
          <h2 className="subtitle">If an item does not appear in our records, then is does not exist</h2>
        </div>
        <div className='row'>
          <div className="col-md-6">
            <FormComponent onChange={this.onChange} />
          </div>
          <div className="col-md-6">
            {!error && !isLoaded ? (
              <SpinnerComponent text="Searching Star Wars archives..." />
            ) : null}
          </div>
        </div>
        {error ? <ErrorComponent error={error} /> : null}
        {!error && isLoaded ? (
          <TableComponent
            data={items}
            title={items.length > 0 ? "The following results have been found" : "Your search returned no results. Try again."}
            subject={subject}
            headerFields={DataUtils.fieldsPerSubjectMap.get(subject)} />
        ) : null}
      </div>
    );
  }
}