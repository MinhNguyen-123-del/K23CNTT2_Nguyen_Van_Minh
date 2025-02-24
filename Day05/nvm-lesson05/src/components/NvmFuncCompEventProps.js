import React from "react";
export default function NvmFuncCompEventProps(props){
    const nvmHanldeButtonClick1 =()=>{
        alert("Dữ liệu từ props:"+props.nvmRenderName);
        console.log("Xin chào",props.nvmRenderName);
    }
    const nvmHanldeButtonClick2 =(param)=>{
        alert("Dữ liệu từ props (Button 2 Click):"+ props.nvmRenderName);
        //Dữ liệu từ tham số
        console.log('===========');
        console.log("Hi:",param);
        console.log('===========');
    }
    return (
        <div className="alert alert-danger">
            <button className='btn btn-primary mx-1'
            onClick={nvmHanldeButtonClick1}>Button 1</button>

            <button className="btn btn -success mx-1"
            onClick={()=>nvmHanldeButtonClick2("Button 2")}>Button 2</button>
        </div>
    )
}