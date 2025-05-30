import React, { Component } from 'react';

class NvmControl extends Component {
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn btn-primary btn-icon-text">
              Thêm mới tài khoản
            </button>
          </div>
          <div className="col-6">
            <form className="search-form">
              <i className="icon-search" />
              <input type="search" className="form-control" placeholder="Search Here" />
              <button className="btn btn-primary btn-icon-text">Tìm kiếm</button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default NvmControl;
