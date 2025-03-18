// Thêm mới dữ liệu
import React,{useState} from 'react'
import axios from 'axios'
export default function NvmCreateMockAPI() {
    //Khởi tạo State
    const[nvmFullName,setNvmFullName]=useState('')
    const[nvmAge,setNvmAge]=useState('0')
    const[nvmActive,setNvmActive]=useState(true)
    //api post
    const nvmCreateUserApi="https://67d98b5700348dd3e2ab915e.mockapi.io/k23cntt2_nguyenvanminh/nvm_users";
    //khi submit form
    const nvmHandleSubmit = (event) => {
        event.preventDefault();
        console.log("nvmActive:",nvmActive);
        let nvmNewUser={nvmFullName,nvmAge,nvmActive};
        console.log(nvmNewUser);
    //ghi dữ liệu vào api
    axios
        .post(nvmCreateUserApi,nvmNewUser)
        .then((nvm_response)=>{
            
        })
    }
    return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className='row mb-1'>
                <label for="nvmFullName">FullName</label>
                <input type='text'name='nvmFullName'id="nvmFullName"
                value={nvmFullName} 
                onChange={(ev)=>setNvmFullName(ev.target.value)}/>
            </div>
            <div className='row mb-1'>
                <label for="Age">Age</label>
                <input type='number'name='Age'id="Age" 
                value={nvmAge}
                onChange={(ev)=>setNvmAge(ev.target.value)}/>
            </div>
            <div className='row mb-1'>
                <label for="nvmActive">Active</label>
                <input type='radio'name='nvmActive'id="nvmActive_hd"value={'true'} 
                    onChange={(ev)=>setNvmActive(ev.target.value)}/>
                    <label for="nvmActive_hd">Hoạt Động</label>
                <input type='radio'name='nvmActive'id="nvmActive_kh"value={'false'} 
                    onChange={(ev)=>setNvmActive(ev.target.value)}/>
                    <label for="nvmActive_kh">Khóa</label>
            </div>
            <button onClick={nvmHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
