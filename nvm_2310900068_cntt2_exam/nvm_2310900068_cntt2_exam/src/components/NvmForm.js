import React, { Component } from 'react'

export default class NvmForm extends Component {
  render() {
    return (
        <div className="card">
        <div className="card-body">
          <h3 className="card-title">Nvm_Danh Sách Tài Khoản</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nvm_ID</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nvm_Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nvm_UserName</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nvm_Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nvm_Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nvm_Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
