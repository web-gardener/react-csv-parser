import React from 'react';
import CSVReader from "react-csv-reader";
import './App.css';

const handleForce = data => {
  console.log(data);
};

function App() {
  return (
    <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Select CSV File"
      onFileLoaded={handleForce}
    />
    <p>Open the console to view parsed data</p>
  </div>
  );
}

export default App;
