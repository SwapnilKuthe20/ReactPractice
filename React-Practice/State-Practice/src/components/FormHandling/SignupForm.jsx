import React, { useState } from 'react';

const SignupForm = () => {

    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        country: "",
        terms: ""
    })

    console.log(formdata, "...formData");


    const handleForm = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type == "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        alert('Form submitt success !!')
    }

    return (
        <div>
            <h1> Signup Form </h1>

            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="name"> Name </label>
                <input type="text" id='name' name='name' value={formdata.name} onChange={handleForm} /> <br /> <br />

                <label htmlFor="email"> email </label>
                <input type="email" id='email' name='email' value={formdata.email} onChange={handleForm} /> <br /> <br />

                <label htmlFor="password"> password </label>
                <input type="text" id='password' name='password' value={formdata.password} onChange={handleForm} /> <br /> <br />

                <label htmlFor="gender"> gender <br /> <br />
                    <label htmlFor="male">
                        <input type="radio" id='male' name='gender' value="male" checked={formdata.gender == "male"} onChange={handleForm} />
                        Male
                    </label>

                    <label htmlFor="female">
                        <input type="radio" id='female' name='gender' value="female" checked={formdata.gender == "female"} onChange={handleForm} />
                        Female
                    </label>
                </label><br /> <br />


                <label htmlFor="country"> Country </label>
                <select name="country" id="country" value={formdata.country} onChange={handleForm}>
                    <option value=""> --Select Country-- </option>
                    <option value="India"> India </option>
                    <option value="USA"> USA </option>
                    <option value="China"> China </option>
                </select> <br /> <br />

                <label htmlFor="terms"> Terms </label>
                <input type="checkbox" name='terms' checked={formdata.terms} onChange={handleForm} /> <br /> <br />

                <button type='submit'> Submit </button>
            </form>

        </div>
    );
}

export default SignupForm;
