import React, { useState } from 'react'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import NvmHome from './components/NvmHome'
import NvmAbout from './components/NvmAbout'
import NvmContact from './components/NvmContact'
import NvmNavNar from './components/NvmNavNar'
import NvmListUser from './components/NvmListUser'
import NvmFormUser from './components/NvmFormUser'
export default function NvmApp() {

  const listUsers = [
    {id: "SV001",nvmFullName: "Nguyễn Văn Minh",nvmUserName: "MinhXinh",nvmPass: "123456@"},
    {id: "SV002",nvmFullName: "Đặng Thị Thủy",nvmUserName: "ThuyXinh",nvmPass: "sdsdasd@"},
    {id: "SV003",nvmFullName: "Doãn Trí Bình",nvmUserName: "BinhXinh",nvmPass: "bĩnhinh@"}
  ]
  const[nvmUsers,setNvmUsers]=useState(listUsers)
  const nvmHandleAdd=(nvmParam)=>{
    console.log("nvmHandleAdd:",nvmParam);
    
  }

  return (
    <div>
        <h1>Chào Minh</h1>
        <hr />
        <Router>
          <NvmNavNar />
          <Routes> 
            <Route path='/'element={<NvmHome />} />
            <Route path='/about'element={<NvmAbout />} />
            <Route path='/contact'element={<NvmContact />} />
            <Route path='/list-user'element={<NvmListUser renderNvmUsers={nvmUsers}/>} />
            <Route path='/create-user'element={<NvmFormUser onNvmAddNew={nvmHandleAdd}/>} />
          </Routes>
        </Router>
      </div>
  )
}
