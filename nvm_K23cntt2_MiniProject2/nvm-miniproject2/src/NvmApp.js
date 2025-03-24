import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NvmNavNar from './components/NvmNavNar';
import NvmListUser1 from './components/NvmListUser1'; // Import đúng component
import NvmCreateUser1 from './components/NvmCreateUser1';
import NvmHome from './components/NvmHome';

export default function NvmApp() {
  return (
    <Router>
      <NvmNavNar />  {/* Điều hướng menu */}
      <Routes>
        <Route path="/home" element={<NvmHome />}/>
        <Route path="/list" element={<NvmListUser1 />} />  
        <Route path="/create-user" element={<NvmCreateUser1 />} />  
      </Routes>
    </Router>
  );
}
