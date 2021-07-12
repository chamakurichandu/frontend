import React from 'react'
import { useForm } from 'react-hook-form';

export default function About() {
    const [name,setName]=React.useState("");
    const { register, handleSubmit,reset, formState: { errors } } = useForm({mode: 'onChange',});

    const submit = data => {
        console.log(data);
        setName(data.username)
        reset();
    }
    return (
        <div>
           <div className="fs-2 text-center text-warning">Register Form </div>
           <form onSubmit={handleSubmit(submit)}>
               <input type="text" {...register("username", { required: true, minLength: 5, maxLength: 10, pattern: /[A-Za-z]/ })} autoComplete="off" placeholder="username"/>
               {errors.username && <p>please enter your name...</p>}
               <div><button type="submit">Submit</button></div>
           </form>
           <div>{name}</div>
        </div>
    )
}
