import React, { Component } from 'react'
import NvmStudent from './NvmStudent'

export default class NvmStudentList extends Component {
    render() {
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <NvmStudent/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
