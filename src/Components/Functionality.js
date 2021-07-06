import React from 'react';
import Email from "./Email";

export default function App() {

  const [textColor,setTextColor]=React.useState();
  const [users, setUsers] = React.useState([
    { "id": 1, "name": "Chandra", "email": "chamakurichandu@gmail.com" },
    { "id": 2, "name": "suneel", "email": "suneel.s@gmail.com" },
    { "id": 3, "name": "vinod", "email": "vinod@gmail.com" },
    { "id": 4, "name": "ravi", "email": "ravi@gmail.com" },
  ]);

  let names=['chandra',"suneel","ravi","vinod","mahesh","basha"]
  let persons=['chandra','anil','hari']
  let arr1=[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:4,name:"d"},{id:5,name:"e"}]
  let arr2=[{id:1,name:"a",state:"healthy"},{id:3,name:"c",state:"healthy"}]
  let people=[
    {
      name:"chandra",
      age:25,
    },
    {
      name:"suneel",
      age:23,
    },
    {
      name:"ravi",
      age:24,
    },
    {
      name:"vinod",
      age:22,
    }
  ]
  
const handleDelete=(i)=>{
      let allInfo=[...users]
      allInfo.splice(i,1);
      setUsers(allInfo);

}

const handleSubmit=(color)=>{
        setTextColor(color)
}


  return (
    <div>
      {/* <Email/> */}
      <h1 className="text-center text-warning my-5">Javascript Functionality</h1>
      <h3 className="text-center text-primary">Delete Method</h3>
      <table className="w-75 m-auto  my-5">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {users.map((info,i)=>(
            <tr key={i}>
            <td>{info.id}</td>
            <td>{info.name}</td>
            <td>{info.email}</td>
            <td><button className="btn btn-danger" onClick={()=>handleDelete(i)}>Delete</button></td>
            </tr>
          ))}
      </tbody>
      </table>

      <div>
        <h3 className="text-center text-primary">Filter Method</h3>
        {names.filter(name=>name.includes('s')).map(filterName=>(
          <div className="text-center">
          {filterName}
          </div>
        ))}
                {names.filter(name=>name.indexOf('s')===0).map(filterName=>(
          <div className="text-center">
          {filterName}
          </div>
        ))}
              <div className="text-center">
        {people.filter(person=>person.age<23).map(filteredPerson=>(
          <div>{filteredPerson.name}</div>
        ))}
      </div>
      <div className="text-center">
        {names.filter(e=>persons.includes(e))}
      </div>
      <div>{arr1.filter(el=>arr2.find(element=>element.id===el.id)).map(val=>(
        <div className="text-center">
          {val.name}
        </div>
      ))}</div>
      </div>
      <h2 className="text-center" style={{color:textColor}}>Change the color By Clicking button</h2>
      <div className="text-center">
        <button type="button" className="btn btn-danger" onClick={()=>handleSubmit('red')}>Red</button>
        <button type="button" className="btn btn-primary" onClick={()=>handleSubmit('blue')}>Blue</button>
        <button type="button" className="btn btn-success" onClick={()=>handleSubmit('green')}>Green</button>
        <button type="button" className="btn btn-warning" onClick={()=>handleSubmit('yellow')}>Yellow</button>
      </div>
      <div className="text-center my-5 ">
        <button className="btn btn-secondary px-5 me-3">Prev</button>
        <button className="btn btn-secondary px-5">Next</button>
      </div>
    </div>
  )
}
