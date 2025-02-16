import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Thông tin cá nhân</h1>
        <p><strong>Họ và tên:</strong> Nguyễn Văn Minh</p>
        <p><strong>Mã sinh viên:</strong> 2310900068</p>
        <p><strong>Ngày sinh:</strong> 03/07/2005</p>
        <p><strong>Điện thoại:</strong> 00001323432</p>
        <p><strong>Tên lớp:</strong> Lớp CNTT2</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
