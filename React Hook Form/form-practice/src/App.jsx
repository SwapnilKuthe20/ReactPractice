import { Controller, useForm, useFormState, useWatch } from 'react-hook-form'
import './App.css'
import MyInput from './Components/MyInput';

function App() {
  console.log("reRender....");

  const { register, handleSubmit, reset, control } = useForm({
    mode: 'onBlur',
    // reValidateMode: "onChange",
    shouldFocusError: true,
    delayError: 500,
    criteriaMode: 'all'
  });

  const { errors, isSubmitting } = useFormState({
    control
  });

  const SkillValidate = {
    validate: (skills) => (
      skills.length > 0 || "Please select atleast 1 skill"
    )
  }

  // const password = watch('password', "")
  // const custom = watch("custom", "")

  const password = useWatch({
    control,
    name: "password"
  })
  // console.log(password, "...password");

  const onValid = (data) => {
    console.log("Form submitt...");
    console.log(data, "...data");

    reset()
  }

  return (
    <div className='bg-black text-white min-h-screen py-12'>
      <div className='w-4/5 m-auto bg-cyan-950 py-12' >
        <h1 className='text-2xl font-bold text-center mb-12'> React Hook Form </h1>
        <form
          onSubmit={handleSubmit(onValid)}
          className='flex justify-center gap-3 flex-col w-1/2 p-12 m-auto bg-pink-400 text-black'
        >

          <label htmlFor="name"> Name </label>
          <input
            type="text"
            {...register('name', {
              required: "Name is required..",
              minLength: {
                value: 3,
                message: "Name should be atleast 3 chars"
              }
            })}
            className={`border-2 rounded-2xl outline-none px-3 py-2 ${errors.name ? 'border-red-600' : 'border-black'}`}
          />

          {
            errors.name && <p className='text-red-600 '> {errors.name.message} </p>
          }

          <label htmlFor="email"> Email </label>
          <input
            type="email"
            {...register('email', {
              required: "Email is Required..",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email id"
              }
            })}
            className='border-2 border-amber-800 rounded-2xl outline-none px-3 py-2'
          />
          {
            errors.email && <p className='text-red-600 '> {errors.email.message} </p>
          }

          <label htmlFor="pass"> Password </label>
          <input
            type="password"
            {...register('password', {
              required: "Password is Required..",
              validate: {
                hasNumber: v => /[0-9]/.test(v) || "Pass must have a number",
                hasCapital: v => /[A-Z]/.test(v) || "Pass must have a Capital letter",
                hasSymbol: v => /[!@#$%&*]/.test(v) || "Pass must have a Symbol",
                hasLength: v => v.length >= 6 || "Pass must be atleast 6 characters"
              }
            })}
            className='border-2 border-amber-800 rounded-2xl outline-none px-3 py-2'
          />
          {
            errors.password?.types &&
            Object.values(errors.password?.types).map((msg, i) => (
              <p key={i} className='text-red-600'> {msg} </p>
            ))
          }

          <label htmlFor="confPass"> Confirm-Password </label>
          <input
            type="password"
            {...register('confPassword', {
              required: "Confirm-Password is Required..",
              validate: (value) => {
                return value === password || "password does not match.."
              }
            })}
            className='border-2 border-amber-800 rounded-2xl outline-none px-3 py-2'
          />
          {
            errors.confPassword && <p className='text-red-600 '> {errors.confPassword.message} </p>
          }

          <label htmlFor="skills"> Skills </label>
          <label htmlFor='JS' className='cursor-pointer'>
            <input
              id='JS'
              type="checkbox"
              value={"js"}
              {...register("skills", SkillValidate)}
              className='cursor-pointer'
            /> JS
          </label>

          <label htmlFor='css' className='cursor-pointer'>
            <input
              id='css'
              type="checkbox"
              value={"css"}
              {...register("skills", SkillValidate)}
              className='cursor-pointer'
            /> CSS
          </label>

          <label htmlFor='react' className='cursor-pointer'>
            <input
              id='react'
              type="checkbox"
              value={"react"}
              {...register("skills", SkillValidate)}
              className='cursor-pointer'
            /> ReactJS
          </label>

          {
            errors.skills && (
              <p className="text-red-600">{errors.skills.message}</p>
            )
          }

          <label htmlFor="gender"> Gender </label>
          <label htmlFor="male" className='cursor-pointer'>
            <input
              id='male'
              type="radio"
              value="male"
              {...register("gender", {
                required: "Please select gender"
              })}
            /> Male
          </label>

          <label htmlFor="female" className='cursor-pointer'>
            <input
              id='female'
              type="radio"
              value="female"
              {...register("gender", {
                required: "Please select gender"
              })}
            /> Female
          </label>
          {
            errors.gender && (
              <p className="text-red-600">{errors.gender.message}</p>
            )
          }

          <label htmlFor="accept" className='cursor-pointer'>
            <input
              id='accept'
              type="checkbox"
              {...register('accept', {
                required: "PLease Accept Terms & conditions "
              })}
              className='mr-2 cursor-pointer'
            />
            Accept Terms & Conditions
          </label>

          {
            errors.accept && <p className='text-red-600'> {errors.accept.message} </p>
          }

          <Controller
            name='custom'
            control={control}
            render={({ field }) => (
              <MyInput
                {...field}
                label="Custom"
                type="text"
                placeholder="Enter Custom Input here..."
              />
            )}
          />

          <button
            className={`px-3 py-2 rounded-2xl text-white w-1/2 m-auto mt-12 ${!isSubmitting ? 'bg-green-900 cursor-pointer' : 'bg-gray-800 cursor-not-allowed'}`}
            disabled={isSubmitting}
          >
            Save
          </button>

        </form>
      </div>
    </div >
  )
}

export default App
