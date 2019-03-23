import React from "react";
import ErrorComponent from './ErrorComponent';
import SpinnerComponent from './SpinnerComponent';
import ListComponent from './ListComponent';
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
    DataUtils.getStarWarsData("people", "darth", this.onSuccess, this.onError);
  }

  onSuccess = result =>
    this.setState({
      isLoaded: true,
      items: result.results
    });

  onError = (error) =>
    this.setState({
      isLoaded: true,
      error
    });

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className='container'>
        <div className="row">
          <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star"></img>
          <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"></img>
          <h2 className="byline">If an item does not appear in our records, then is does not exist</h2>
        </div>
        <FormComponent />
        {error ? <ErrorComponent error={error} /> : null}
        {!error && !isLoaded ? (
          <SpinnerComponent text="Loading Star Wars Data..." />
        ) : null}
        {!error && isLoaded ? (
          <ListComponent data={items} title="The following has been found" />
        ) : null}
      </div>
    );
  }
}