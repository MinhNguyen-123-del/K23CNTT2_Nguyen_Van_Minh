import React, { Component } from 'react'

export default class NvmRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state={
            nvmStudent:[
                {nvmID:"NTU01",nvmName:"Nguyễn Văn Minh",nvmAge:19,nvmClass:"K23CNTT2"},
                {nvmID:"NTU02",nvmName:"Doãn Chí Bình",nvmAge:19,nvmClass:"K23CNTT1"},
                {nvmID:"NTU03",nvmName:"Đoàn Thị Ngọc Ánh",nvmAge:20,nvmClass:"K22CNTT1"},
                {nvmID:"NTU04",nvmName:"Đặng Thị Thủy",nvmAge:19,nvmClass:"K23CNTT2"},
                {nvmID:"NTU05",nvmName:"Tiểu Long Nữ",nvmAge:18,nvmClass:"K24CNTT4"},
            ],
        }
    }
  render() {
    let nvmElement=this.state.nvmStudent.map((nvmItem,index)=>{
      return(
        <tr>
            <th>{index+1}</th>
            <th>{nvmItem.nvmID}</th>
            <th>{nvmItem.nvmName}</th>
            <th>{nvmItem.nvmAge}</th>
            <th>{nvmItem.nvmClass}</th>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
      )  
    })
    return (
      <div className='alert alert-info'>
        <h2>Danh Sách Sinh Viên</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>nvmID</th>
                    <th>nvmName</th>
                    <th>nvmAge</th>
                    <th>nvmClass</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            {nvmElement}
        </table>
      </div>
    )
  }
}
