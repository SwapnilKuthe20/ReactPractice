import React from 'react';

const ChildD = ({ userData }) => {
    // console.log(userData, "userdata....");
    // const { name, skill, profile } = userData;
    return (
        <>
            {
                userData.map(({ name, skill, profile }, ind) => (
                    <div key={ind} style={{ backgroundColor: "purple", color: "White", width: "500px", height: "250px" }}>
                        <h1> Child D</h1>
                        <h2>{name}</h2>
                        <h3>{skill}</h3>
                        <h3>{profile}</h3>
                    </div>
                ))
            }
        </>
    );
}

export default ChildD;
