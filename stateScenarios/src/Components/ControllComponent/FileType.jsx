import React, { useState } from "react";

const FileType = () => {
    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        // console.log(e, "...event");

        const selectedFile = e.target.files[0]
        // console.log(selectedFile, "...Selectd File");
        // console.log(typeof selectedFile, "...Selectd File");
        setFile(selectedFile)

        // const blobImg = URL.createObjectURL(selectedFile);
        // console.log(blobImg, "...blobImg");

        // if (blobImg) {
        //     window.open(blobImg)
        // }
    }

    return (
        <>
            <label htmlFor="file"> Upload File Here : </label>

            <input
                type="file"
                id="file"
                onChange={handleFile}
                accept="image/*, .pdf"
            />

            {
                file && (
                    <>
                        <p>Image name : {file.name}</p>
                        <p>Image size : {file.size}</p>
                        <p>Image type : {file.type}</p>

                        <img src={URL.createObjectURL(file)} alt="image-preview" style={{ width: "200px", marginTop: "10px" }} />
                    </>
                )
            }

        </>
    )
}

export default FileType;