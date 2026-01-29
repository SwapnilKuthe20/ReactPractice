import React, { useEffect, useState } from 'react';

const Forms = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        profilePic: null,
        accept: false
    })

    const [preview, setPriview] = useState(null)
    // console.log(form, "...form");

    const handleInp = (e) => {
        console.log(e, "...synthetic events");
        const { name, value, type, files, checked } = e.target

        setForm(prev => ({
            ...prev,
            [name]: (type == "checkbox") ? checked : (type == "file") ? files[0] : value
        }))
    }

    useEffect(() => {

        if (!form.profilePic) {
            setPriview(null)
            return
        };

        const url = URL.createObjectURL(form.profilePic)
        setPriview(url)

        return () => {
            URL.revokeObjectURL(url)
        }

    }, [form.profilePic])

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData()

        data.append('name', form.name)
        data.append('email', form.email)
        data.append('password', form.password)
        data.append('gender', form.gender)

        if (form.profilePic) {
            data.append('profilePic', form.profilePic)
        }

        for (let [key, value] of data.entries()) {
            console.log(key, " : ", value);
        }

        const { profilePic, ...rest } = form

        // console.log(rest, "...rest");

        localStorage.setItem("formData", JSON.stringify(rest))

        setForm({
            name: "",
            email: "",
            password: "",
            gender: "",
            profilePic: null,
            accept: false
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <form action="" onSubmit={handleSubmit} className='w-2/5 bg-emerald-600 rounded-2xl flex flex-col p-10 justify-center gap-3'>

                <h1 className='text-center text-4xl'> Form Handling </h1>

                <label htmlFor="name"> Name : </label>
                <input
                    type="text"
                    id='name'
                    name="name"
                    value={form.name}
                    onChange={handleInp}
                    placeholder='Enter name...'
                    className='border-2 rounded border-amber-400 w-3/4 outline-none p-1.5 '
                />

                <label htmlFor="email"> Email : </label>
                <input
                    type="email"
                    id='email'
                    name="email"
                    value={form.email}
                    onChange={handleInp}
                    placeholder='Enter email....'
                    className='border-2 rounded border-amber-400 w-3/4 outline-none p-1.5 '
                />
                <label htmlFor="pass"> Password : </label>
                <input
                    type="password"
                    id='pass'
                    name="password"
                    value={form.password}
                    onChange={handleInp}
                    placeholder='Enter password...'
                    className='border-2 rounded border-amber-400 w-3/4 outline-none p-1.5'
                />

                <label htmlFor="gender" > Gender :
                    <input
                        type="radio"
                        id='gender'
                        name="gender"
                        value="male"
                        checked={form.gender === "male"}
                        onChange={handleInp}
                        className='mx-3 '
                    /> Male

                    <input
                        type="radio"
                        id='gender'
                        name="gender"
                        value="female"
                        checked={form.gender === "female"}
                        onChange={handleInp}
                        className='mx-3'
                    /> Female

                </label>

                <label htmlFor="pic">Profile Pic :</label>
                <input
                    type="file"
                    id='pic'
                    name='profilePic'
                    onChange={handleInp}
                    className='border-amber-400 rounded-2xl border-2 p-1.5'
                />

                {
                    form.profilePic &&
                    <div className='max-w-44 max-h-20 '>
                        <img src={preview} alt="preview" className='rounded-[50%]' />
                    </div>
                }

                <label htmlFor="accept">
                    <input
                        type="checkbox"
                        name='accept'
                        checked={form.accept}
                        onChange={handleInp}
                        className='m-2'
                    />
                    I accept terms and conditions
                </label>

                <button className='border-none bg-amber-400 rounded-2xl py-2 w-3/4 cursor-pointer'> Save </button>
            </form>
        </div>
    );
}

export default Forms;

