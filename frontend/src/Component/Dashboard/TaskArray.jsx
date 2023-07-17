import React from 'react'
import { Table } from 'react-bootstrap';
const TaskArray = () => {
    const adminTaskStatus = [
        {
            userName: "Name 1",
            numberOfTasks: 2,
            completedTasks: 30,
        },
        {
            userName: "Name 2",
            numberOfTasks: 5,
            completedTasks: 27,
        },
        {
            userName: "Name 3",
            numberOfTasks: 1,
            completedTasks: 17,
        },
        {
            userName: "Name 4",
            numberOfTasks: 3,
            completedTasks: 19,
        },
        {
            userName: "Name 5",
            numberOfTasks: 7,
            completedTasks: 23,
        },
        {
            userName: "Name 6",
            numberOfTasks: 2,
            completedTasks: 31,
        },
        {
            userName: "Name 7",
            numberOfTasks: 5,
            completedTasks: 8,
        },
    ];
    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Number of Tasks</th>
                        <th>Completed Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminTaskStatus.map((ele) => {
                            return (
                                <>

                                    <tr>
                                        <td>{ele.userName}</td>
                                        <td>{ele.numberOfTasks}</td>
                                        <td>{ele.completedTasks}</td>
                                    </tr>

                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TaskArray
