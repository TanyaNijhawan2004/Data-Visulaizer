import React from 'react';
import FundArray from './FundArray';
import Fundgraph from './Charts/Fundgraph';
import FundRaiseCard from './FundRaiseCard';


const FundRaiseComponent = () => {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className='my-5'> <FundRaiseCard /></div>
        <div className="row d-flex align-items-center">

          <div className="col-lg-6">
            <Fundgraph />
          </div>
          <div className="col-lg-6 p-5">
            <FundArray />
          </div>

        </div>

      </div>
    </>
  );
};

export default FundRaiseComponent;
