import { CChart } from '@coreui/react-chartjs'
import React from 'react'
// const jsonData = JSON.parse(localStorage.getItem('jsonData'));
// const dataArray = Object.values(jsonData.pageViewCounts);
// console.log(dataArray);

const PieChartt = () => {
    return (
        <>
            <div className='card'>
                <h3 className='card-header'>Time Spent on Page (%)</h3>
                <CChart className='card-body'
                    type="doughnut"
                    data={{
                        labels: ['HomePage', 'About', 'Our Work', 'Get Involved','Blog','Contact Us' ,'Donate'],
                        datasets: [
                            {
                                backgroundColor: ['#0074D9', '#2ECC40', '#FF851B', '#FF4136', '#B10DC9', '#FFDC00', '#39CCCC'],
                                data: [55,24, 30, 22, 45, 9, 20]
                            },
                        ],
                    }}
                />
            </div>

        </>



    )
}

export default PieChartt
