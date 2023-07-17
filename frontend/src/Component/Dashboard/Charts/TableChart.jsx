import React, { useEffect, useRef } from 'react';
import ProgressChart from './ProgressChart';
const TableChart = () => {
  const data = [
    { id: 1, name: 'Home', popularity: 80 },
    { id: 2, name: 'About', popularity: 60 },
    { id: 3, name: 'Services', popularity: 90 },
    { id: 4, name: 'Contact', popularity: 75 },
  ];

  return (
    <div className="container">
      <h2>Table Title</h2>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <ProgressChart popularity={item.popularity} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default TableChart;
