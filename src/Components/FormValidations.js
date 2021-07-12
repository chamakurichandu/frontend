// import React,{useEffect} from 'react';
// import { useForm } from "react-hook-form";
// import  moment from "moment";
// export default function PersonalInfo() {
//     const [dob,setDob]=React.useState("");
//     const [dobErr,setDobErr]=React.useState("");
//     const { register, setError, clearErrors, handleSubmit: handleSubmits, formState: { errors } } = useForm({ mode: "onChange" });
//     const { onChange, ...rest } = register("dob");
//     const submit = (data) => {
//         console.log(data);
//     }
// useEffect(()=>{
//     console.log(moment("17061996", "DDMMYYYY").fromNow())
// },[])

// const handleDob=(event)=>{
//             setDob(event.target.value);
//             let value=event.target.value;
//             if(value.length ===10){
//                 let match = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(value);
//                 if(match){
//                     let dob = value.split("/").join("");
//                     let diff = parseInt(moment(dob, "DDMMYYYY").fromNow());
//                     if(diff>=18){
//                         setDobErr("")
//                     }else{
//                         setDobErr("Below 18 years should not be register");
//                     }
//                 }else{
//                     setDobErr("Please Entrer a valid formate dob")
//                 }
                
//             }else{
//                 setDobErr("Please Enter valid dob")
//             }
// }
//     return (
//         <div className="container">
//             <div className="fs-3 fw-bold text-center text-warning">Personal Info</div>
//             <form onSubmit={handleSubmits(submit)}>
//                 <label for="exampleInputEmail1" class="form-label">First Name</label>
//                 <input type="text" className="form-control" {...register("firstname", { required: true, minLength: 3, maxLength: 30, pattern: /[A-Za-z0-9]/ })} placeholder="firstname" />
//                 {errors.firstname && <div className="text-danger">Please Enter Valid name</div>}
//                 <label for="exampleInputEmail1" class="form-label">Last Name</label>
//                 <input type="text" className="form-control" {...register("lastname", { required: true, minLength: 3, maxLength: 30, pattern: /[A-Za-z0-9]/ })} placeholder="lastname" />
//                 {errors.lastname && <div className="text-danger">Please Enter valid Name</div>}
//                 <label for="exampleInputEmail1" class="form-label">Gender</label>
//                 <select className="form-select" {...register("gender")}>
//                     <option value="A">Male</option>
//                     <option value="B">Female</option>
//                 </select>
//                 <label for="exampleInputEmail1" class="form-label">Date of birth</label>
//                 <div>Specify date in format like 25/03/1987</div>
//                 <input type="text" className="form-control" value={dob} onChange={handleDob}/>
//                 <div className="text-danger">{dobErr}</div>
//                 <label for="exampleInputEmail1" class="form-label">PAN Number</label>
//                 <input type="text" className="form-control"{...register("pannum",{required:true,minLength:3,pattern:/[A-Z0-9]/})} />
//                 {errors.pannum && <div className="text-danger">Please Enter Valid PAN Number</div>}
//                 <label for="exampleInputEmail1" class="form-label">Father's Name</label>
//                 <input type="text" className="form-control" {...register("father",{required:true,minLength:3,maxLength:30,pattern:/[A-Za-z]/})}/>
//                 {errors.father && <div className="text-danger">Please Enter the Valid name</div>}
//                 <label for="exampleInputEmail1" class="form-label">Marital Status</label>
//                 <select className="form-select">
//                     <option>Preferred Not to Closed</option>
//                     <option>Married</option>
//                     <option>Unmarried</option>
//                 </select>
//                 <div><button className="btn btn-primary">Save</button></div>
//             </form>
//         </div>
//     )
// }
