import React, { useState } from 'react';

const FileType = () => {

    const [photo, setPhoto] = useState(null)

    const handleFile = (e) => {
        const file = e.target.files[0]
        setPhoto(file)

        console.log(URL.createObjectURL(file), "..pic")
    }


    return (
        <div>
            <label htmlFor="photo"> Profile Pic : </label>
            <input
                type="file"
                accept='image/*'
                onChange={handleFile}
            />

            {
                photo &&
                <div className='max-w-52 max-h-52 m-2.5'>
                    <img src={URL.createObjectURL(photo)} alt="preview" className='rounded-[50%]' />
                </div>
            }

        </div>
    );
}

export default FileType;
