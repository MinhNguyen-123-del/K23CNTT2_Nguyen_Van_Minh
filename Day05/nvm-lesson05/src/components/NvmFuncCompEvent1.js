import React from "react";
export default function NvmFuncCompEvent1(){
    //Hàm xử lí sự kiện
    const nvmEvenButton1Click=()=>{
        alert("Button 1-Clicked");
    };
    
    const nvmEvenButton2Click=()=>{
        alert("Button 2-Clicked");
    };
    const nvmEvenButton3Click=(name)=>{
        alert("Name:"+name);
    };
    return(
        <div className="alert alert-info">
            <button className='btn btn-primary' onClick={nvmEvenButton1Click()}>
                Button1
            </button>
            <button className='btn btn-success' onClick={nvmEvenButton2Click()}>
                Button2
            </button>
            <button className='btn btn-success' onClick={nvmEvenButton3Click("Nguyễn văn minh")}>
                Button3
            </button>
            <button className='btn btn-success' onClick={()=>nvmEvenButton3Click("Minh Nguyễn")}>
                Button4
            </button>
        </div>
    );
}