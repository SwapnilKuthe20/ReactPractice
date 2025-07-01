import React, { useState } from 'react';

const MultiCheckbox = () => {

    const mySkills = ["HTML", "CSS", "JS", "React"]

    const [skills, setSkills] = useState([])
    console.log(skills, "...skills");


    const handleSkills = (e) => {
        const { value, checked } = e.target;

        console.log(e, "...event");
        console.log(e.target.value, "...value");
        console.log(e.target.checked, "...checked");


        if (checked) {
            setSkills(prevState => [...prevState, value])
        } else {
            setSkills(prev => prev.filter((skill) => skill != value))
        }
    }

    return (
        <>
            <h3> handling multiselect checkbox </h3>
            {
                mySkills?.map((skill, index) => (
                    <label htmlFor={skill} key={index}>
                        <input
                            type="checkbox"
                            id={skill}
                            value={skill}
                            checked={skills.includes(skill)}
                            onChange={handleSkills}
                        />
                        {skill}
                    </label >
                ))

            }
        </>
    );
}

export default MultiCheckbox;

