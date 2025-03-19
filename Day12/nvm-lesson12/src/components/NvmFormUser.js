import React, { useState } from 'react';

export default function NvmFormUser() {
  // Khai báo useState
  const [nvmid, setnvmid] = useState('');
  const [nvmFullName, setnvmFullName] = useState('');
  const [nvmUserName, setnvmUserName] = useState('');
  const [nvmPass, setnvmPass] = useState('');

 

  const nvmHandleSubmit = (event) => {
    event.preventDefault();
    console.log(nvmid,nvmFullName,nvmUserName,nvmFullName,nvmPass)

    onNvmAddNew({nvmid,nvmFullName,nvmUserName,nvmFullName,nvmPass})
    // Xử lý form submit ở đây
    console.log("Form submitted!");
  };
  return (
    <div>
        <form>
            <p>Mã Sinh Viên:
                <input type='text' name='nvmid' value={nvmid} onChange={(ev)=>setnvmid(ev.target.value)}/> </p>
            <p>Họ và Tên:
                <input type='text'name='nvmFullName' value={nvmFullName} onChange={(ev)=>setnvmFullName(ev.target.value)} />
            </p>
            <p>Tài Khoản:
                <input type='text' name='nvmUserName'value={nvmUserName} onChange={(ev)=>setnvmUserName(ev.target.value)}/>
            </p>
            <p>Mật Khẩu:
                <input type='password'name='nvmpass' value={nvmPass} onChange={(ev)=>setnvmPass(ev.target.value)}/>
            </p>
            <button name='nvmSave' onClick={nvmHandleSubmit}>Save</button>
        </form>
    </div>
  )
}
