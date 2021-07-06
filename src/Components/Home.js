import React,{useEffect} from 'react';
import axios from "axios";
import {Link,NavLink} from "react-router-dom";

export default function Home() {

    const [users,setUsers]=React.useState([]);

    useEffect(()=>{
        loadUsers();
    },[])
const loadUsers = async()=>{
    const result= await axios.get("http://localhost:3001/users");
        console.log(result);
        setUsers(result.data);
}

const handleDelete= async (id)=>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
}
    return (
        <div>
<table className="table">
  <thead className="table-dark">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   {users.map((info,index)=>(
       <tr>
           <th scope="row">{index+1}</th>
           <td>{info.name}</td>
           <td>{info.email}</td>
           <td>{info.phone}</td>
           <td>{info.website}</td>
           <td>
           <Link to={`/edituser/${info.id}`} className="btn btn-outline-primary me-3">Edit</Link>
           <Link className="btn btn-outline-danger" onClick={()=>handleDelete(info.id)}>Delete</Link>           
           </td>

       </tr>
   ))}
  </tbody>
</table>
        </div>
    )
}
