import React, { useState, useEffect, useCallback } from "react";
import ErrorComponent from './ErrorComponent';
import SpinnerComponent from './SpinnerComponent';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';
import * as DataUtils from '../utils/DataUtils'

const DashboardComponent = () => {
  console.log("running DashboardComponent")

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [subject, setSubject] = useState('people');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const onSuccess = (results) => {
      console.log("running onSuccess - setIsLoaded");
      setIsLoaded(true);
      console.log("running onSuccess - setItems");
      setItems(results);
    }

    const onError = error => {
      console.log("running onError");
      setIsLoaded(true);
      setError(error);
    }
    console.log("going to get awesome Star Wars data");
    DataUtils.getStarWarsData(subject, searchTerm, onSuccess, onError);
  }, [subject, searchTerm]);

  // Create a memoized function to pass to FormComponent. This is necessary because otherwize the function reference is 
  // different on each render and the React.memo in FormComponent will not have any effect, resulting in endless rerender. 
  // Every value referenced inside the function should appear in the dependencies array, but in this case this is nothing.
  const memoizedHandleChange = useCallback((subject, searchTerm) => {
    console.log(`handleChange subject: ${subject} searchTerm: ${searchTerm}`)
    setSubject(subject);
    setSearchTerm(searchTerm);
    setIsLoaded(false);
    setError(null);
  }, []);

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
          <FormComponent onChange={memoizedHandleChange} />
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
};

export default DashboardComponent;