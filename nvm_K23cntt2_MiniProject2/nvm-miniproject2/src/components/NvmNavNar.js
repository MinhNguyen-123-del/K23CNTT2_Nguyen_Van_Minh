import React from "react";
import { Link } from "react-router-dom";

export default function NvmNavNar({ userCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Trang chủ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                Danh sách người dùng |
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-user">
                Thêm mới thông tin User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
