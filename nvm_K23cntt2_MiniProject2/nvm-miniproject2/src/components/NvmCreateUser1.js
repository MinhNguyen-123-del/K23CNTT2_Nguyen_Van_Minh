import React, { useState } from 'react';
import axios from 'axios';

export default function NvmCreateUser1() {
  // Khởi tạo state
  const [nvmName, setNvmName] = useState('');
  const [nvmEmail, setNvmEmail] = useState('');
  const [nvmPhone, setNvmPhone] = useState('');
  const [nvmActive, setNvmActive] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // API POST
  const nvmCreateUserApi =
    'https://67d98b5700348dd3e2ab915e.mockapi.io/k23cntt2_nguyenvanminh/nvm_users';

  // Khi submit form
  const nvmHandleSubmit = (event) => {
    event.preventDefault();

    // Tạo đối tượng người dùng mới
    let nvmNewUser = { nvmName, nvmEmail, nvmPhone, nvmActive };
    console.log('nvmNewUser:', nvmNewUser);

    // Gửi dữ liệu lên API
    axios
      .post(nvmCreateUserApi, nvmNewUser)
      .then((nvm_response) => {
        // Xử lý khi gửi thành công
        setSuccessMessage('Người dùng đã được tạo thành công!');
        setErrorMessage('');  // Xóa thông báo lỗi nếu có
        setNvmName('');
        setNvmEmail('');
        setNvmPhone('');
        setNvmActive(true); // Reset form
      })
      .catch((error) => {
        // Xử lý khi có lỗi
        console.log('Lỗi phát sinh khi thêm dữ liệu:', error);
        setErrorMessage('Không thể thêm người dùng. Vui lòng thử lại!');
        setSuccessMessage('');  // Xóa thông báo thành công nếu có
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Thêm mới người dùng</h2>

      {/* Hiển thị thông báo khi thêm thành công hoặc lỗi */}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="alert alert-info">
        <form onSubmit={nvmHandleSubmit}>
          <div className="mb-3">
            <label htmlFor="nvmName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="nvmName"
              id="nvmName"
              value={nvmName}
              onChange={(ev) => setNvmName(ev.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nvmEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="nvmEmail"
              id="nvmEmail"
              value={nvmEmail}
              onChange={(ev) => setNvmEmail(ev.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nvmPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              name="nvmPhone"
              id="nvmPhone"
              value={nvmPhone}
              onChange={(ev) => setNvmPhone(ev.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Active</label><br />
            <input
              type="radio"
              name="nvmActive"
              id="nvmActive_hd"
              value="true"
              checked={nvmActive === true}
              onChange={() => setNvmActive(true)}
            />
            <label htmlFor="nvmActive_hd" className="form-check-label me-3">
              Hoạt Động
            </label>
            <input
              type="radio"
              name="nvmActive"
              id="nvmActive_kh"
              value="false"
              checked={nvmActive === false}
              onChange={() => setNvmActive(false)}
            />
            <label htmlFor="nvmActive_kh" className="form-check-label">
              Khóa
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Tạo Người Dùng
          </button>
        </form>
      </div>
    </div>
  );
}
