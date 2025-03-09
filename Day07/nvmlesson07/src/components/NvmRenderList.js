import React from 'react'

export default function NvmRenderList() {
    const nvmList=["Nguyễn Minh","ReactJS","Fit-NTU"];
    const nvmElement =nvmList.map(item=>{
        return<li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        <h2>Danh Sách:</h2>
        <ul>
        {
           nvmList.map(item=>{
            return <li>{item}</li>  
           }) 
        }
        </ul>
        {nvmElement}
    </div>
  )
}
