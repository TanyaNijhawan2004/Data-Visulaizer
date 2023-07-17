import {React,useEffect,useState} from 'react';
import VisitorInsight from './Charts/VisitorInsight';
import axios from 'axios';

import Adminpage from './Adminpage';
import FundRaiseComponent from './FundRaiseComponent';
import MiddlePart from './MiddlePart';
const Dashboard = () => {
    useEffect(() => {
        console.log('useEffect called');
        axios
          .get('http://localhost:8080/api/csv')
          .then((res) => {
            const jsonData = res.data;
            // Store the JSON data in local storage
            localStorage.setItem('jsonData', JSON.stringify(jsonData));
            console.log(jsonData);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      
    return (
        <>
            <div className="container">
                <Adminpage />
            </div>

            <div className='container mt-2'>
                <MiddlePart/>
            </div>
            <div className="container mt-2">
                <FundRaiseComponent/>
            </div>
        </>
    );
};

export default Dashboard;
