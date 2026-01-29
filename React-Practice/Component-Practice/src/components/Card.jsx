import React from 'react';

const Card = ({ title, children, bg = "orange" }) => {
    return (
        <div style={{
            border: "2px solid yellow",
            padding: "15px",
            margin: "20px",
            backgroundColor: bg,
            borderRadius: '10px',
            boxShadow: "6px 8px 15px red",
            textAlign: "center",
            width: "300px"
        }}
        >
            <h2 style={{ color: "yellow" }} > Card </h2>
            {
                title &&
                <h2> {title} </h2>
            }

            <div>
                {children}
            </div>
        </div >
    );
}

export default Card;
