import React, { useState } from 'react';

const ControlledFrom = () => {
    const [show, setShow] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        country: "",
        gender: "",
        skills: [],
        accept: false
    })

    console.log(form, "...form ");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // console.log(name, value, type, checked, "....target");

        if (name === "skills") {
            setForm(prev => ({
                ...prev,
                skills: checked
                    ? [...prev.skills, value]
                    : prev.skills.filter(skill => skill !== value)
            }))
        } else {

            setForm(prev => ({
                ...prev,
                [name]: type == "checkbox" ? checked : value
            }))
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("formdata", JSON.stringify(form))
    }

    return (
        <div className='w-full bg-amber-950 '>
            <h1 className='text-2xl font-black my-12 text-center'> React Hook Form </h1>
            <div className='flex justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className='bg-green-900 border-2 w-1/2 border-red-600 rounded-2xl flex flex-col px-8 gap-3 mb-12'
                >
                    <h1 className='text-2xl text-center font-black my-8 text-pink-600 underline'> Submission Form </h1>

                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Enter Name Here...'
                        className='border-2 border-white rounded-2xl outline-none px-3 py-2'

                    />

                    <label htmlFor="email"> Email </label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Enter Email Here...'
                        className='border-2 border-white rounded-2xl outline-none px-3 py-2'
                    />

                    <label htmlFor="pass"> Password </label>
                    <div
                        className='border-2 border-white bg-transparent rounded-2xl outline-none px-3 py-2 flex justify-between'
                    >
                        <input
                            type={show ? "password" : "text"}
                            id='pass'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            placeholder='Enter Password Here...'
                            className='bg-transparent active:bg-transparent hover:bg-transparent outline-none '
                        />
                        <span className='cursor-pointer' onClick={() => setShow(!show)}> {show ? "Show" : "Hide"} </span>
                    </div>

                    <label htmlFor="add"> Address </label>
                    <textarea
                        type="textarea"
                        id='add'
                        rows={4}
                        cols={5}
                        name='address'
                        value={form.address}
                        onChange={handleChange}
                        placeholder='Enter Address Here...'
                        className='border-2 border-white rounded-2xl outline-none px-3 py-2'

                    />

                    <label htmlFor="country"> Select Country </label>
                    <select
                        name="country"
                        id="country"
                        value={form.country}
                        onChange={handleChange}
                        className='border-2 border-white px-2 py-2 rounded-2xl outline-none w-1/2 cursor-pointer'
                    >
                        <option value=""> Select Country </option>
                        <option value="Ind"> India </option>
                        <option value="USA"> USA </option>
                        <option value="Aus"> Australiya </option>
                        <option value="Pak"> Pakistan </option>
                    </select>

                    <label htmlFor="gender"> Gender </label>
                    <label htmlFor='male'>
                        <input
                            type="radio"
                            id='male'
                            name='gender'
                            value="male"
                            checked={form.gender === "male"}
                            onChange={handleChange}
                            className='cursor-pointer mx-3'
                        />  <span className='cursor-pointer'> Male </span>
                    </label>

                    <label htmlFor='female'>
                        <input
                            type="radio"
                            id='female'
                            name='gender'
                            value="female"
                            checked={form.gender === "female"}
                            onChange={handleChange}
                            className='cursor-pointer mx-3'
                        /> <span className='cursor-pointer'> Female </span>
                    </label>

                    <label htmlFor="skills"> Skills </label>

                    <label htmlFor='js'>
                        <input
                            type="checkbox"
                            id='js'
                            name='skills'
                            value="JS"
                            onChange={handleChange}
                            checked={form.skills.includes("JS")}
                            className='cursor-pointer mx-3 '

                        />  JS
                    </label >

                    <label htmlFor='react'>
                        <input
                            type="checkbox"
                            id='react'
                            name='skills'
                            value="reactJs"
                            onChange={handleChange}
                            checked={form.skills.includes("reactJs")}
                            className='cursor-pointer mx-3'
                        /> ReactJS
                    </label>

                    <label htmlFor='css'>
                        <input
                            type="checkbox"
                            id='css'
                            name='skills'
                            value="CSS"
                            onChange={handleChange}
                            checked={form.skills.includes("CSS")}
                            className='cursor-pointer mx-3'
                        /> CSS
                    </label>

                    <label htmlFor='tailwind'>
                        <input
                            type="checkbox"
                            id='tailwind'
                            name='skills'
                            value="Tailwind"
                            onChange={handleChange}
                            checked={form.skills.includes("Tailwind")}
                            className='cursor-pointer mx-3'
                        /> Tailwind
                    </label>

                    <label htmlFor="accept" className='cursor-pointer'>
                        <input
                            type="checkbox"
                            id='accept'
                            name='accept'
                            onChange={handleChange}
                            checked={form.accept}
                            className='cursor-pointer mr-2'

                        /> Accept Terms & Conditions
                    </label>

                    <button
                        type='submit'
                        className='px-4 w-1/2 m-auto py-2 bg-pink-700 rounded-2xl border-none cursor-pointer my-9'
                    >
                        Submit
                    </button>
                </form>
            </div >
        </div >
    );
}

export default ControlledFrom;

