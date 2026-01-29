import React from 'react';

const InputField = ({ label, type = "text", name, autoComplete, formik }) => {

    return (
        <div className='flex flex-col gap-4' >

            <label htmlFor={label} className='text-white'> {label} </label>

            <input
                id={label}
                type={type}

                name={name}
                value={formik.values[name].trim()}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                // {...formik.getFieldProps(name)}
                autoComplete={autoComplete}
                className='w-3/4 outline-none border-2 border-emerald-500 rounded-2xl p-2'
            />

            {
                formik.touched[name] && formik.errors[name] && (
                    <p className='text-red-600'> {formik.errors[name]} </p>
                )
            }

        </div>
    );
}

export default InputField;
