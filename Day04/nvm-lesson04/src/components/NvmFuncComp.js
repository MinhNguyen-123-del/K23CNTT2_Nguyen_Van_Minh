import React from "react";
export default function NvmFuncComp(props){
    return(
        <div>
            <h2> Demo Function Component Props</h2>
            <p> Lấy dữ liệu từ Props để hiện thị</p>
            <p>Name:{props.name}</p>
            <p>Address:{props.address}</p>
            <p>Company:{props.company}</p>
            <p>Note:{props.note}</p>
        </div>
    )
}
