import React, { Component }  from "react";
class NvmClassCompEvent1 extends Component{
    //Hàm xử lí sư kiện
    nvmEventHandleClick1=()=>{
        alert("Button 1 clicked");
    }
    nvmEventHandleClick2=(name)=>{
        alert("Button 2 clicked;name"+name);
    }
    render(){
        return(
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.nvmEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1'
                onClick={this.nvmEventHandleClick2("Văn Minh")}>
                Button 2
                </button>
            </div>
        );
    }
}
export default NvmClassCompEvent1