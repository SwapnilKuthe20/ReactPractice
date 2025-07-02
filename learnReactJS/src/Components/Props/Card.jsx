import React from 'react';

const cardStyle = { backgroundColor: "yellow", color: "purple", width: "500px", height: "200px", margin: "auto", padding: "10px", marginBottom: "5px" }
const Card = ({ name, age, location }) => {
    return (
        <>
            <div style={cardStyle}>
                <h3 style={{ textAlign: "center" }}> CARD </h3>
                <h4 style={{ textAlign: "center" }}> User Name : {name} </h4>
                <h4 style={{ textAlign: "center" }}> User Age : {age} </h4>
                <h4 style={{ textAlign: "center" }}> User Location : {location} </h4>
            </div>
        </>
    );
}

export default Card;
