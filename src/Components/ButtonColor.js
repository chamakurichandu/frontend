import React from 'react';

export default function ButtonColor() {
    const [textColor,setTextColor]=React.useState()
    
    const colorSubmit=(color)=>{
             setTextColor(color)   
    }
    return (
        <div>
            <h2 style={{color:textColor}}>Click the button to change the color</h2>
            <div style={{display:"flex"}}>
            <div><button className="btn btn-danger" onClick={()=>colorSubmit("red")}>red</button></div>
            <div><button className="btn btn-primary" onClick={()=>colorSubmit("blue")}>Blue</button></div>
            <div><button className="btn btn-success" onClick={()=>colorSubmit("green")}>Green</button></div>
            <div><button className="btn btn-warning" onClick={()=>colorSubmit("yellow")}>Yellow</button></div>
            </div>
        </div>
    )
}
