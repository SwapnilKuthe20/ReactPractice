import React from 'react';
import ChildProps from './ChildProps';

const ParentProps = () => {
    return (
        <div >
            <ChildProps>
                <img src="user.jpg" />
                <p>Frontend Developer</p>
                <button>Follow</button>
            </ChildProps>

            <ChildProps>
                <ul>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </ChildProps>

            <ChildProps>
                <h3 style={{ textAlign: "center" }}> CARD </h3>
                <h4 style={{ textAlign: "center" }}> User Name : Swapnil </h4>
                <h4 style={{ textAlign: "center" }}> User Age : 32 </h4>
                <h4 style={{ textAlign: "center" }}> User Location : Nagpur </h4>
            </ChildProps>
        </div>
    );
}

export default ParentProps;
