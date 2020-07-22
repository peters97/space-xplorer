import React from 'react';


// @ts-ignore
const LaunchCard = ({launch}) => {
    console.log(launch);
    return (
        <div className="card card-launch">
            <h3>{launch.mission_name}</h3>
            <p>{launch.details}</p>
        </div>
    );
}

export default LaunchCard;