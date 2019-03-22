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
      <React.Fragment>
        <FormComponent />
        {error ? <ErrorComponent error={error} /> : null}
        {!error && !isLoaded ? (
          <SpinnerComponent text="Loading Star Wars Data..." />
        ) : null}
        {!error && isLoaded ? (
          <ListComponent data={items} title="The Dark Side, and the Light" />
        ) : null}
      </React.Fragment>
    );
  }
}