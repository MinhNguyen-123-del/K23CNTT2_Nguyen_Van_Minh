import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function NvmReactMockAPI() {
    //khởi tạo state
    const[nvmListUser,setNvmListUser]=useState([])
    //API
    const nvmApiOnline="https://67d98b5700348dd3e2ab915e.mockapi.io/k23cntt2_nguyenvanminh/nvm_users"
    //Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(nvmApiOnline)
            .then((nvm_response)=>{
                setNvmListUser(nvm_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    //view data
    const nvmElementUsers=nvmListUser.map((nvm_item,index)=>{
        return(
            <tr>
                <td>{nvm_item.nvmId}</td>
                <td>{nvm_item.nvmFullName}</td>
                <td>{nvm_item.nvmAge}</td>
                <td>{nvm_item.nvmActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
    <div className='alert alert-danger'>
        <h2>Danh Sách</h2>
        <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>FullName</th>
                <th>Age</th>
                <th>Active</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                nvmElementUsers
            }
        </tbody>
    </table>
    </div>
  )
}
