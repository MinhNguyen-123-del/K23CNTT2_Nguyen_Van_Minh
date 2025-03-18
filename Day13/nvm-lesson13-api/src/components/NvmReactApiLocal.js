import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function NvmReactApiLocal() {
    //khởi tạo state
    const[nvmListUser,setNvmListUser]=useState([])
    //đọc dữ liệu từ api local và set cho nvmListuser
    const apiUrl="http://localhost:3001/users"
    //lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
        .get(apiUrl)
        .then((nvmResponse)=>{
            setNvmListUser(nvmResponse.data)
        })
        .catch((error)=>{
            console.log("Lỗi");
        })
    },[])

  return (
    <div>
    <h2>Đọc dữ liệu từ API local</h2>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>FullName</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                nvmListUser.map((nvmItem,index)=>{
                    return(
                        <tr key={nvmItem.id || index}>
                            <td>{nvmItem.fullName}</td>
                            <td>{nvmItem.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}
