import React from 'react';

export default function Contact() {

    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [phone,setPhone]=React.useState("");
    const [nameErr,setNameErr]=React.useState("");
    const [emailErr,setEmailErr]=React.useState("");
    const [phoneErr,setPhoneErr]=React.useState("");
    const [subVal,setSubVal]=React.useState([]);


const handleName=(event)=>{
        setName(event.target.value);
        if(event.target.value.length <=6){
            setNameErr("Please Enater Atleast 6 Characters")
        }else{
            setNameErr("");
        }
}
const handleEmail=(event)=>{
    setEmail(event.target.value);
    let emailRegex = /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm;
    if(!emailRegex.test(event.target.value)){
        setEmailErr("Please Enter Valid Email");
    }else{
        setEmailErr("");
    }
}

const handlePhone=(event)=>{
    setPhone(event.target.value);
    if(event.target.value.length !==10){
        setPhoneErr("Please Enater valid mobile number")
    }else{
        setPhoneErr("");
    }
}
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!nameErr&& !emailErr&& !phoneErr){
                setSubVal([...subVal,[subVal.length+1,name,email,phone]]);
        }
        setName("");
        setEmail("");
        setPhone("");
    }
    
    return (
        <div>
            <h2 className="text-center text-warning py-3">Register Form</h2>
            <form className="w-50 m-auto" onSubmit={(e)=>handleSubmit(e)}>
                <div className="py-2"><input type="text" placeholder="username" className="form-control" value={name} onChange={handleName} required/></div>
                <div className="text-danger">{nameErr}</div>
                <div className="py-2"><input type="text" placeholder="email" className="form-control" value={email} onChange={handleEmail} required/></div>
                <div className="text-danger">{emailErr}</div>
                <div className="py-2"><input type="number" placeholder="phone" className="form-control" value={phone} onChange={handlePhone} required/></div>
                <div className="text-danger">{phoneErr}</div>
                {/* <div className="py-2"><input type="file" placeholder="username" className="form-control"/></div>
                <div className="py-2"><input type="text" placeholder="username" className="form-control"/></div>
                <div className="py-2"><input type="text" placeholder="username" className="form-control"/></div>
                <div className="py-2"><input type="text" placeholder="username" className="form-control"/></div>
                <div className="py-2"><input type="text" placeholder="username" className="form-control"/></div> */}
                <div className="d-grid py-2"><button type="submit" className="btn btn-danger">Submit</button></div>
            </form>
            <div>
                {subVal.map((info,i)=>(
                    <div key={i}>
                    <ul >
                        <li>{info}</li>
                    </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
