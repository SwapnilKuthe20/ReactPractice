import React from 'react';
import ChildA from './ChildA';

const ParentComp = () => {
    const userData = [
        { name: "Swap", skill: "reactJs", profile: "ReactDev" },
        { name: "Neel", skill: "HTML", profile: "HtmlDEv" },
        { name: "Sneel", skill: "CSS", profile: "CSSDev" },
        { name: "SN", skill: "JavaScript", profile: "JsDEv" }
    ]
    // console.log(userData);
    return (
        <>
            <h1> Parent Component </h1>
            <ChildA userData={userData} />

        </>
    );
}

export default ParentComp;
