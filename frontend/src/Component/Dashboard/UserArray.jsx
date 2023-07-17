
import React from 'react'
import Card from 'react-bootstrap/Card';

const UserArray = () => {
    const userProps = [
        {
            userName: "Rahul Thakar",
            userRole: "IT service",
            daysLeft: 2,
            textColor: "#FF0000",
            color: "#FFE6E6",
        },
        {
            userName: "Anirrudha Sharma",
            userRole: "Web service",
            daysLeft: 3,
            textColor: "#FF0000",
            color: "#FFE6E6",
        },
        {
            userName: "Disha Jain",
            userRole: "Cyber service",
            daysLeft: 7,
            textColor: "#07AB70",
            color: "#E6F7F1",
        },
    ];
    return (
        <>
            {
                userProps.map((ele) => {
                    return (
                        <>
                            <Card className="p-2 rounded-md row m-1 w-75 " style={{background:"#ECEDF7"}}>
                                <div className="row d-flex">
                                    <div className="col-8 d-flex align-items-center ">
                                        {/* <img className="col-4 " src={require('./Ayush.png')} alt="User Avatar" /> */}
                                        <div className="p-2 m-1">
                                            <h6 className="">{ele.userName}</h6>
                                            <p className="">{ele.userRole}</p>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center flex-column align-items-end">
                                        <span className='mx-2'>Start</span>
                                        <h6 style={{ color: ele.textColor }}>{ele.daysLeft} days left</h6>
                                    </div>
                                </div>

                            </Card>
                        </>
                    )
                })
            }
        </>
    )
}

export default UserArray
