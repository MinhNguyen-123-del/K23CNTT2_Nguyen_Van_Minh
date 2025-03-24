import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NvmNavBar from './components/NvmNavBar';
import NvmListUser1 from './components/NvmListUser1';
import NvmCreateUser1 from './components/NvmCreateUser1';
import NvmHome from './components/NvmHome';
import NvmEditUser from './components/NvmEditUser';

export default function NvmApp() {
  return (
    <div className="container border my-3 p-3">
      <h1 className="alert alert-danger text-center">
        K23CNT2 - Nguyễn Văn Minh - 2310900068
      </h1>
      <hr />
      <Router>
        <NvmNavBar /> {/* Điều hướng menu */}
        <Routes>
          <Route path="/home" element={<NvmHome />} />
          <Route path="/list" element={<NvmListUser1 />} />
          <Route path="/create-user" element={<NvmCreateUser1 />} />
          <Route path="/edit-user/:id" element={<NvmEditUser />} />
          
        </Routes>
      </Router>
    </div>
  );
}
