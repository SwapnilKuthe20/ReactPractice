import React, { useState } from "react";

const RealWorldForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        country: "",
        bio: "",
        age: "",
        dob: "",
        terms: false,
        profile: null,
    });



    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const formPayload = new FormData();
        // for (const key in formData) {
        //     formPayload.append(key, formData[key]);
        // }

        // fetch("/api/user/register", {
        //     method: "POST",
        //     body: formPayload,
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         alert("Form submitted successfully!");
        //         console.log("Success:", data);
        //     })
        //     .catch((err) => {
        //         console.error("Error:", err);
        //         alert("Something went wrong!");
        //     });
    };
    console.log(formData, "...formData");

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

            <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Write your bio" />

            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />

            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

            <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                />
                Female
            </label>

            <label>
                <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                />
                Accept Terms
            </label>

            <input type="file" name="profile" onChange={handleChange} accept="image/*" />

            <button type="submit">Submit</button>
        </form>
    );
};

export default RealWorldForm;
