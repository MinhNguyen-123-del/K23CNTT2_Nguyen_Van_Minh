import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function NvmEditUser() {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate(); // Điều hướng sau khi sửa thành công

  // Khởi tạo state
  const [nvmName, setNvmName] = useState("");
  const [nvmEmail, setNvmEmail] = useState("");
  const [nvmPhone, setNvmPhone] = useState("");
  const [nvmActive, setNvmActive] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // API URL
  const apiUrl = `https://67d98b5700348dd3e2ab915e.mockapi.io/k23cntt2_nguyenvanminh/nvm_users/${id}`;

  // Lấy dữ liệu người dùng từ API khi component mount
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const user = response.data;
        setNvmName(user.nvmName);
        setNvmEmail(user.nvmEmail);
        setNvmPhone(user.nvmPhone);
        setNvmActive(user.nvmActive);
      })
      .catch((error) => {
        console.log("Lỗi khi tải dữ liệu:", error);
        setErrorMessage("Không thể tải thông tin người dùng.");
      });
  }, [id]);

  // Xử lý cập nhật thông tin người dùng
  const handleUpdate = (event) => {
    event.preventDefault();

    // Tạo đối tượng dữ liệu cần cập nhật
    const updatedUser = { nvmName, nvmEmail, nvmPhone, nvmActive };

    axios
      .put(apiUrl, updatedUser) // Gửi dữ liệu cập nhật lên API
      .then(() => {
        setSuccessMessage("Cập nhật thành công!");
        setErrorMessage("");
        setTimeout(() => navigate("/"), 2000); // Quay lại trang danh sách sau 2 giây
      })
      .catch((error) => {
        console.log("Lỗi khi cập nhật:", error);
        setErrorMessage("Không thể cập nhật người dùng. Vui lòng thử lại!");
        setSuccessMessage("");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Chỉnh Sửa Người Dùng</h2>

      {/* Hiển thị thông báo */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="alert alert-info">
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="nvmName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
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
            Cập Nhật
          </button>
        </form>
      </div>
    </div>
  );
}
