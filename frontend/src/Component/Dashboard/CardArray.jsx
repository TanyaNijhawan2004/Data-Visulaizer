import {React,useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'



//make a state


const cardProps = [
    {
        text: "User Visited",
        number:JSON.parse(localStorage.getItem('jsonData'))?.userCount,
        color: "#ECEDF7",
        textColor: "#3F4AAF"
    },
    {
        text: "Bounce Rate %",
        number: 55,
        color: "#E6F7F1",
        textColor: "#07AB70",
    },
    {
        text: "Average Time Spent (Sec)",
        number: 31.18,
        color: "#FFE6E6",
        textColor: "#FF0000",
    },
    {
        text: "Conversion Rate",
        number: 0.12,
        color: "#E6E6FF",
        textColor: "#3F4AAF",
    },
    
];
const CardArray = () => {
    return (
        <>
            {
                cardProps.map((ele) => {
                    return (
                        <>
                            <div className="col">
                                <Card
                                    className="w-100 px-3 pt-3 pb-4 my-3"
                                    style={{ backgroundColor: ele.color }}
                                >
                                    <Card.Title className='' >{ele.text}</Card.Title>
                                    <Card.Text style={{ fontSize: '2rem', color: ele.textColor, alignContent: "center" }}>
                                        {ele.number}
                                    </Card.Text>
                                </Card>
                            </div>

                        </>
                    )
                })
            }
        </>
    )
}

export default CardArray
