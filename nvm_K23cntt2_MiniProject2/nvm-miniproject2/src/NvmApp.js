import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NvmNavNar from './components/NvmNavNar';
import NvmListUser1 from './components/NvmListUser1'; // Import đúng component
import NvmCreateUser1 from './components/NvmCreateUser1';

export default function NvmApp() {
  return (
    <Router>
      <NvmNavNar />  {/* Điều hướng menu */}
      <Routes>
        <Route path="/" element={<h3>k23CNT2 ReactJS with API-Nguyễn Văn Minh-231090068</h3>} />
        <Route path="/list" element={<NvmListUser1 />} />  {/* Đảm bảo đường dẫn đúng */}
        <Route path="/create-user" element={<NvmCreateUser1 />} />  {/* Đảm bảo đường dẫn đúng */}
      </Routes>
    </Router>
  );
}
