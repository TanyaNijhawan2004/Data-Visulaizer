import {React,useEffect} from 'react'
import axios from 'axios';

const Dummy = (() => {
    useEffect(() => {
        axios
          .post('http://localhost:5000/analyze')
          .then((res) => {
            const Data = res.data;
            // Store the JSON data in local storage
            const data1=Object.entries(Data).map(([key, value]) => {
                console.log(`${key}: ${value}`);
                let newData={};
                newData[key]=value.map((ele,index)=>{
                    return ele.replaceAll('_',' ');
                })
                return newData;
                });
            console.log(data1);
            const Data2={};
            data1.forEach((ele,index)=>{
                Data2[Object.keys(ele)[0]]=Object.values(ele)[0];
            })
            localStorage.setItem('Data', JSON.stringify(Data2));
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

})

export default Dummy