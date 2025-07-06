import React, { useState } from 'react';
import LiftStateForm from './LiftStateForm';
import LiftStateLive from './LiftStateLive';
import LiftStateLength from './LiftStateLength';

const LiftStateParent = () => {

    const [formData, setFormData] = useState({
        name: "",
        profile: ""
    })

    const handleForm = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <LiftStateForm formData={formData} handleForm={handleForm} />

            <LiftStateLength formData={formData} />
            <LiftStateLive formData={formData} />
        </div>
    );
}

export default LiftStateParent;
