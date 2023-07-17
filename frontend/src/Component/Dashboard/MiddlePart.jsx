import React from 'react';
import PieChart from './Charts/PieChart';
import ScrollGraph from './Charts/ScrollGraph';

const MiddlePart = () => {
    return (
        <>

            <div className="row d-flex align-items-center">

                <div className="col-lg-6">
                <div className='card'>
                <h3 className='card-header'>Latency (ms)</h3>
                    <div><ScrollGraph /></div>
                </div>
                </div>
                <div className="col-lg-6 p-5">
                <div className='card'>
                <h3 className='card-header'>Social Count (%)</h3>
                    <div><PieChart /></div>
                </div>
                </div>
            </div>

        </>
    );
};

export default MiddlePart;
