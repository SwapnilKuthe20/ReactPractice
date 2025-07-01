import React, { useState } from "react";

const InputText = () => {
    const [text, setText] = useState("")
    // console.log(text, "typeee");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form sumbitted successfully !! ${text}`);
        setText("");
    }

    return (
        <>
            <h3> Handling Input text </h3>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label> <br /> <br />

                <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={text}
                    name="name"
                    placeholder="Enter name  here..."
                    // required                            // mandatory.. submit nhi hoga black ho to
                    // disabled                            // disable inp field
                    // autoFocus                           // page load pr auto focus aa jata h
                    // autoComplete="off"                  // for suggestions
                    // readOnly                            // user type nhi kr skta
                    // minLength={7}
                    // maxLength={12}

                /> <br /> <br />

                <button type="Submit">Submit</button>
            </form>


        </>
    )
}

export default InputText;