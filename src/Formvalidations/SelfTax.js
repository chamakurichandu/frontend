import React from 'react';
import { useForm } from "react-hook-form";
export default function SelfTaxPayment() {
    const [amount, setAmount] = React.useState("");
    const [amountErr, setAmountErr] = React.useState("");
    const { register, handleSubmit, formState: { errors }, } = useForm({ mode: "onChange" });

    const onsubmit = (data) => {
        console.log(data);
    }
    const handleAmount = (event) => {
        setAmount(event.target.value)
        let value = event.target.value;
        if (value<=0) {
            setAmountErr("This field cannot be negative. Please enter a positive amount only.")
        }else{
            setAmountErr("");
        }
        
    }
    return (
        <div>
            <div className="container py-5">
                <div className="fs-2 text-center text-warning">Self tax Paid</div>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <label for="exampleInputEmail1" class="form-label">Amount Paid *</label>
                    <input type="number" className="form-control" value={amount} onChange={handleAmount} />
                 <div className="text-danger">{amountErr}</div>
                  <div className="py-3"><button type="submit" className="btn btn-primary">submit</button></div>  
                </form>
            </div>
        </div>
    )
}
