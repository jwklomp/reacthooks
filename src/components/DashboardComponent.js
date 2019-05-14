import React, { useState, useEffect } from "react";
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
    console.log("running useEffect")
    DataUtils.getStarWarsData(subject, searchTerm, onSuccess, onError);
  }, [subject, searchTerm]);

  const onSuccess = (results) => {
    setIsLoaded(true);
    setItems(results);
  }

  const onError = error => {
    setIsLoaded(true);
    setError(error);
  }

  const onChange = (_subject, _searchTerm) => {
    console.log(`subject - current: ${subject} - new: ${_subject}`)
    console.log(`searchTerm - current: ${searchTerm} - new: ${_searchTerm}`)
    console.log(`changed: ${(_subject !== subject || _searchTerm !== searchTerm)}`)
    if (_subject !== subject || _searchTerm !== searchTerm) {
      setSubject(_subject);
      setSearchTerm(_searchTerm);
      setIsLoaded(false);
      setError(null);
    }
  }

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
          <FormComponent onChange={onChange} />
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