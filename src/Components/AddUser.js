import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function AddUser() {
    let history=useHistory()
    const [user,setUser]=React.useState({
        name:"",
        email:"",
        phone:"",
        website:""
    });
    const onInputChange = e =>{
            setUser({...user, [e.target.name]:e.target.value})
    }
    const {name,email,phone,website}=user;

    const onsubmit= async e =>{
        e.preventDefault();
            await axios.post("http://localhost:3001/users",user)
            history.push("/");
    }
    return (
        <div className="text-center my-5">
            <h2>Add Users</h2>
            <div className="w-25 m-auto">
                <form onSubmit={e=>onsubmit(e)}>
                    <div className="py-2"><input type="text" placeholder="Enter Your Name" name="name" value={name} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="py-2"><input type="text" placeholder="Enter Your Email Name" name="email" value={email} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="py-2"><input type="text" placeholder="Enter Your Phone Name" name="phone" value={phone} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="py-2"><input type="text" placeholder="Enter Your Website Name " name="website" value={website} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="d-grid py-2"><button type="submit" className="btn btn-primary">AddUser</button></div>
                </form>
            </div>
        </div>
    )
}
