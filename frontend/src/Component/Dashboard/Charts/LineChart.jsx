import React from 'react'
import { CChart } from '@coreui/react-chartjs'
const LineChart = () => {
    return (
        <>
            <CChart
                type="line"
                data={{
                    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
                    datasets: [
                        {
                            label: "Monthly Visitors(K)",
                            backgroundColor: "rgba(65, 105, 225, 1)",
                            borderColor: "rgba(220, 220, 220, 1)",
                            pointBackgroundColor: "rgba(65, 105, 225, 1)",
                            pointBorderColor: "#fff",
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40,12,13,2,2]
                        }
                    ],
                }}
               
            />
        </>
    )
}

export default LineChart
