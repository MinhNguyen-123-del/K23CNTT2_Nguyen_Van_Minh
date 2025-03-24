import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NvmListUser1() {
  const [nvmListUser, setNvmListUser] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); //  Gọi hook ở cấp cao nhất

  const nvmApiOnline =
    "https://67d98b5700348dd3e2ab915e.mockapi.io/k23cntt2_nguyenvanminh/nvm_users";

  useEffect(() => {
    axios
      .get(nvmApiOnline)
      .then((nvm_response) => {
        setNvmListUser(nvm_response.data);
      })
      .catch((error) => {
        console.log("Lỗi phát sinh", error);
        setError("Không thể tải dữ liệu");
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      axios
        .delete(`${nvmApiOnline}/${id}`)
        .then(() => {
          setNvmListUser(nvmListUser.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.log("Lỗi khi xóa người dùng:", error);
          setError("Không thể xóa người dùng. Vui lòng thử lại!");
        });
    }
  };

  const handleUpdate = (nvmId) => {
    navigate(`/edit-user/${nvmId}`); //  Di chuyển trang đúng cách
  };

  const nvmElementUsers = nvmListUser.map((nvm_item) => (
    <tr key={nvm_item.id}>
      <td>{nvm_item.id}</td>
      <td>{nvm_item.nvmName}</td>
      <td>{nvm_item.nvmEmail}</td>
      <td>{nvm_item.nvmPhone}</td>
      <td>{nvm_item.nvmActive ? "Hoạt động" : "Khóa"}</td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => handleUpdate(nvm_item.id)}
        >
          Sửa
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(nvm_item.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Danh Sách Sinh Viên</h2>
      {error && <div className="alert alert-warning">{error}</div>}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{nvmElementUsers}</tbody>
      </table>
    </div>
  );
}
