import React from 'react';

const cardStyle = { backgroundColor: "yellow", color: "purple", width: "500px", height: "200px", margin: "auto", padding: "10px", marginBottom: "5px" }

const ChildProps = ({ children }) => {
    return (
        <>
            <div style={cardStyle}> 
                {children}
            </div>
        </>
    );
}

export default ChildProps;
