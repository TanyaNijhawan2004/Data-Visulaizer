import React from 'react';
import CardArray from './CardArray';
import LineChart from './Charts/LineChart';
import PieChartt from './Charts/PieChartt';
import BarChart from './Charts/Histogram';

const Adminpage = () => {
    return (
        <>
            <div className="container" style={{ height: "100vh" }}>
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <h6 className='mx-3'>Website Data <br /><span className='text-primary'>Data Summery</span></h6>
                        <CardArray />
                    </div>
                    <div className="col-lg-6 p-5">
                        <PieChartt />
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <BarChart/>
                    </div>
                    <div className="col">
                    <div className='card'>
                <h3 className='card-header'>Monthly Visitors</h3>
                    <div><LineChart /></div>
                </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adminpage;
