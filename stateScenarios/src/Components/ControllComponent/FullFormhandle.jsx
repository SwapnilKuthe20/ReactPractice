import React, { forwardRef, useState } from "react";
import CheckBox from "./CheckBox";

const skills = ["HTML", "CSS", "JS", "React"];
const gender = ["Male", "Female", "Other"];
const countries = ["India", "USA", "Austrelia", "London", "Brasil", "Russia"]

const FullFormHandle = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: "",
        skills: [],
        gender: "",
        bio: "",
        country: "",
        profile: null,
        mob: "",
        dob: "",
        rating: 0
    })
    // console.log(formData, "..formData");

    const handleFormdata = (e) => {
        console.dir(e.target, "...target");

        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }))
        } else if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                [name]: checked ? [...prev.skills, value] : [...prev.skills.filter(skill => skill !== value)]
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Form submit Successfully... !")
        console.log(formData, "..formData");

        setFormData({
            name: "",
            email: "",
            pass: "",
            skills: [],
            gender: "",
            bio: "",
            country: "",
            profile: null,
            mob: "",
            dob: "",
            rating: 0
        });

    }

    return (
        <>
            <h3> Full Form handling !! </h3>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name"> Name : </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleFormdata} placeholder="Enter name..." /> <br /><br />

                <label htmlFor="email"> Email : </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleFormdata} placeholder="Enter email..." /><br /><br />


                <label htmlFor="pass"> Password : </label>
                <input type="password" id="pass" name="pass" value={formData.pass} onChange={handleFormdata} placeholder="Enter Password..." /><br /><br />


                <label htmlFor="skills"> Skills : </label>
                {
                    skills.map((skill, ind) => (
                        <label htmlFor={skill} key={ind}>
                            <input
                                type="checkbox"
                                id={skill}
                                name="skills"
                                onChange={handleFormdata}
                                value={skill}
                                checked={formData.skills.includes(skill)}
                            />
                            {skill}
                        </label>
                    ))
                } <br /><br />

                <label htmlFor="gender"> Gender : </label>
                {
                    gender.map((gender, ind) => (
                        <label htmlFor={gender} key={ind}>
                            <input
                                type="radio"
                                id={gender}
                                name="gender"
                                onChange={handleFormdata}
                                value={gender}
                                checked={formData.gender == gender}
                            />
                            {gender}
                        </label>
                    ))
                }<br /><br />


                <label htmlFor="bio"> Bio : </label>
                <textarea name="bio" id="bio" rows={7} cols={25} onChange={handleFormdata} value={formData.bio} placeholder="Enter bio here..."></textarea> <br /><br />


                <label htmlFor="country">Select Country :</label>
                <select name="country" id="country" value={formData.country} onChange={handleFormdata} >
                    <option value="">--Select Country--</option>
                    {
                        countries.map((country, ind) => (
                            <option key={ind} value={country}>{country}</option>
                        ))
                    }
                </select><br /><br />


                <label htmlFor="img"> Profile pic : </label>
                <input
                    type="file"
                    id="img"
                    name="profile"
                    onChange={handleFormdata}
                // value={formData.profile}
                /><br /><br />


                <label htmlFor="mob"> Mobile Number : </label>
                <input
                    type="number"
                    id="mob"
                    name="mob"
                    onChange={handleFormdata}
                    value={formData.mob}
                    placeholder="Enter mobile number..."
                /><br /><br />


                <label htmlFor="dob"> Date Of Birth : </label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={handleFormdata}
                    value={formData.dob}
                /><br /><br />


                <label htmlFor="rating"> Rating : </label>
                <input
                    type="range"
                    name="rating"
                    id="rating"
                    onChange={handleFormdata}
                    value={formData.rating}
                    step={2}
                    min={0}
                    max={10}
                /> &nbsp; {formData.rating}
                <br /><br />

                <button type="submit"> Submit </button>
            </form>
        </>
    )
}
export default FullFormHandle;
