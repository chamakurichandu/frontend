import React,{useEffect} from 'react';
import axios from 'axios';
import { useHistory,useParams } from 'react-router-dom';

export default function EditUser() {
    let history=useHistory();
    const { id } = useParams();
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
            await axios.put(`http://localhost:3001/users/${id}`, user)
            history.push("/");
    }

    const loadUser=async () =>{
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      console.log(result);
      setUser(result.data);
    }

    useEffect(()=>{
        loadUser();
    },[])
    return (
        <div className="text-center my-5">
            <h2>Edit User</h2>
            <div className="w-25 m-auto">
                <form onSubmit={e=>onsubmit(e)}>
                    <div className="py-2"><input type="text" placeholder="Enter Your Name" name="name" value={name} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="py-2"><input type="text" placeholder="Enter Your Email Name" name="email" value={email} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="py-2"><input type="text" placeholder="Enter Your Phone Name" name="phone" value={phone} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="py-2"><input type="text" placeholder="Enter Your Website Name " name="website" value={website} className="form-control" onChange={e=>onInputChange(e)}/></div>
                    <div className="d-grid py-2"><button type="submit" className="btn btn-warning">Update User</button></div>
                </form>
            </div>
        </div>
    )
}
