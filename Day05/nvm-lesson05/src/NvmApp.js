import React, { Component } from "react";
import NvmFuncCompEvent1 from "./components/NvmFuncCompEvent1";
import NvmClassCompEvent1 from "./components/NvmClassCompEvent1";
import NvmFuncCompEventProps from "./components/NvmFuncCompEventProps";
class NvmApp extends Component{
    render(){
        return(
            <div className="container border mt-3">
                <h1 className="text-center alert alert-info my-2">K23CNTT2 -Nguyễn Văn Minh-Event and Form</h1>
                <hr/>
                <div>
                    <h2>Function Component</h2>
                    <NvmFuncCompEvent1/>
                </div>
                <hr/>
                <div>
                    <h2>Class Component-Event</h2>
                    <NvmClassCompEvent1/>
                </div>
                <hr/>
                <div>
                    <h2>Function Component-Event; props</h2>
                    <NvmFuncCompEventProps nvmRenderName="Đặng Thủy"/>
                </div>
            </div>
        );
    }
}
export default NvmApp;