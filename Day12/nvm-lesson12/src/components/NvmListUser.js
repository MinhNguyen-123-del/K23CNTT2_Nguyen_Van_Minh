import { render } from '@testing-library/react'
import React from 'react'

export default function NvmListUser({renderNvmUsers}) {
    const nvmElements=renderNvmUsers.map((nvmItem,index)=>{
        return(
        <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{nvmItem.id}</td>
                <td>{nvmItem.nvmFullName}</td>
                <td>{nvmItem.nvmUserName}</td>
                <td>{nvmItem.nvmPass}</td>
                
            </tr>
        </>)
    })
  return (
    <div>
        <h2>Danh Sách Tài kHoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
                <tbody>
                    {nvmElements}
                </tbody>
            </thead>
        </table>
    </div>
  )
}
