import React from 'react';

const LiftStateForm = ({ formData, handleForm }) => {
    // console.log(formData);

    return (
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" id='name' name="name" value={formData.name} onChange={handleForm} />

            <label htmlFor="profile"> Job Profile : </label>
            <input type="text" id='profile' name='profile' value={formData.profile} onChange={handleForm} />
        </div>
    );
}

export default LiftStateForm;
