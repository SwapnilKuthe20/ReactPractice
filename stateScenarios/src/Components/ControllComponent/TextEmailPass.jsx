import React, { useState } from 'react';

const TextEmailPass = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        pass: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();         // restrict reload form
        
        alert(`Form submitted Succesfully !!
                name : ${form.name}, 
                email: ${form.email},
                pass : ${form.pass}
            `);

        // console.log(form, "...form");

        setForm({
            name: "",
            email: "",
            pass: ""
        })
    }

    return (
        <div>
            <h3> 🔥 Let's start with TEXT, EMAIL, PASSWORD (Controlled Inputs) </h3>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label> <br />
                <input type="text" id='name' onChange={handleChange} value={form.name} name='name' /> <br /><br />

                <label htmlFor="email">Email : </label> <br />
                <input type="email" id='email' onChange={handleChange} value={form.email} name='email' /><br /><br />

                <label htmlFor="pass">Password : </label> <br />
                <input type="password" id='pass' onChange={handleChange} value={form.pass} name='pass' /><br /><br />

                <button>Submit</button>
            </form>

        </div>
    );
}

export default TextEmailPass;
