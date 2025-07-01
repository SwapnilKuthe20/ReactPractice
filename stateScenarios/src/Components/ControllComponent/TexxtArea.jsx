import React, { useState } from 'react';

const TexxtArea = () => {
    const [bio, setBio] = useState("");

    const handleBio = (e) => {
        setBio(e.target.value);
    }
    return (
        <>
            <h3> Textarea Input Filed handling... </h3>

            <label htmlFor="bio" > Enter Bio : </label>

            <textarea name='bio' id="bio" value={bio} onChange={handleBio} rows={5} cols={25} maxLength={200} required ></textarea>


            <p>User Bio is : {bio || " Please enter you bio"}</p>
        </>
    );
}

export default TexxtArea;
