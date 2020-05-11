import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <div>
                <h1></h1>
                <h1>Dashboard</h1>
                <h2>Status: {props.loggedInStatus}</h2>
            </div>
        </div>

    )

}

export default Dashboard;