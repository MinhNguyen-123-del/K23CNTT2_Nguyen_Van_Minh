import React
 from "react";
 export default function NvmJsxExpression(){
    //bien 
    const name="Nguyễn Văn Minh";
    const user={
        firstName:"Văn",
        lastName:"Minh"
    }
    //hàm 
    const fullName=(user)=>{
        return +user.firstName +''+user.lastName ;
    }
    //element
    const element =(
        <div>
            {/*Bieu thuc jsx */}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3>Welcome to,{name}</h3>
        </div>
    );
    //Ham
    const sayWecome = (name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }
        else{
            return <h3>Welcome to Fit-NTU-K23CNTT2</h3>
        }
    }
    return(
        <div>
            <h1>NVM-JSX Expression</h1>
            {/* Sử dụng biến element */}
            {element}
            <hr/>
            {sayWecome}
            <hr/>
            {sayWecome("Doãn Trí Bình")}
        </div>
    )
 }