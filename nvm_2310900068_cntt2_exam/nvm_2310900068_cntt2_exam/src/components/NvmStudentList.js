import React, { Component } from 'react';
import NvmStudent from './NvmStudent';

export default class NvmStudentList extends Component {

    render() {
        // Lấy dữ liệu từ props
        let { renderNvmStudents } = this.props;
        console.log( "List:",renderNvmStudents);

        // Chuyển dữ liệu vào NvmStudent để hiển thị
        let nvmElementStudent = renderNvmStudents.map((nvmItem, index) => {
            return (
                <NvmStudent 
                    key={index} 
                    student={nvmItem} 
                    index={index} 
                />
            );
        });

        return (
            <div className="card-body">
                <h3 className="card-title">Nvm_Danh Sách Tài Khoản</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nvm_ID</th>
                                <th>Nvm_Tên sinh viên</th>
                                <th>Nvm_UserName</th>
                                <th>Nvm_Giới tính</th>
                                <th>Nvm_Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {nvmElementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
