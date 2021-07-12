import React from 'react';
import { useForm } from 'react-hook-form';

const onSubmit=(data)=>{
    console.log(data);
}

export default function Address() {
    const { register,handleSubmit, formState: { errors },} = useForm({mode:"onChange"});
    return (
        <div>
            <div className="container">
            <div className="fs-2 text-center text-warning">Address</div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label for="exampleInputEmail1" class="form-label">Flat/Door/Block Number *</label>
                <input type="text" className="form-control" {...register("address", {required: true, minLength: 3, maxLength: 30, pattern: /[A-Za-z0-9]/})}/>
                {errors.address && <div className="text-danger">Please enter the address</div>}
                <label for="exampleInputEmail1" class="form-label">Pincode *</label>
                <input type="text" className="form-control" {...register("pincode", {required: true, minLength: 6, maxLength: 6, pattern: /[0-9]/})} />
                {errors.pincode && <div className="text-danger">Please enter the Valid Pincode</div>}
                <label for="exampleInputEmail1" class="form-label">Area *</label>
                <input type="text" className="form-control" {...register("area", {required: true, minLength:3, pattern: /[A-Za-z0-9\/]/})} />
                {errors.area && <div className="text-danger">Please enter the Valid area</div>}
                <label for="exampleInputEmail1" class="form-label">City *</label>
                <input type="text" className="form-control" {...register("city", {required: true, minLength:3, pattern: /[A-Za-z0-9\/]/})} />
                {errors.city && <div className="text-danger">Please enter the Valid city name</div>}
                <label for="exampleInputEmail1" class="form-label">Phone *</label>
                <input type="text" className="form-control" {...register("phone", {required: true, minLength:10,maxLength:10, pattern: /[0-9]/})} />
                {errors.phone && <div className="text-danger">Please enter the Valid Mobile Number</div>}
                <label for="exampleInputEmail1" class="form-label">Email *</label>
                <input type="text" className="form-control" {...register("email", {required: true, minLength:3, pattern: /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm})} />
                {errors.email && <div className="text-danger">Please enter the Valid Email</div>}
                <div className="py-3"><button className="btn btn-primary" type="submit">Submit</button></div>
            </form>
        </div>
        </div>
    )
}
