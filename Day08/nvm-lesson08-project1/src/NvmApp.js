import React, { Component } from 'react'
import NvmControl from './components/NvmControl'
import NvmStudentList from './components/NvmStudentList'
import NvmForm from './components/NvmForm'
import NvmStudent from './components/NvmStudent';

 class NvmApp extends Component {
  constructor(props){
    super(props);
    this.state={
      NvmStudent:[
        {nvmid:"SV01",NvmStudentName:"Nguyễn Văn Minh",nvmAge:19,nvmGender:"Nam",nvmBirthday:"03/07/2005",nvmBirthPlace:"HN",nvmAddress:"Minh Khai"},
        {nvmid:"SV02",NvmStudentName:"Doãn Chí Bình",nvmAge:19,nvmGender:"Nam",nvmBirthday:"25/05/2005",nvmBirthPlace:"HN",nvmAddress:"Thanh Xuân"},
        {nvmid:"SV03",NvmStudentName:"Đoàn Ngọc Ánh",nvmAge:20,nvmGender:"Nữ",nvmBirthday:"17/08/1004",nvmBirthPlace:"HN",nvmAddress:"HBT"}
    ],}
  }
  render() {
    return (
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Basic React Lab</title>
  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* header */}
        <NvmControl/>
        {/* Danh sách sinh viên */}
        <NvmStudentList renderNvmStudents={this.state.NvmStudent}/>
      </div>
    </div>
    <div className="col-5 grid-margin">
        {/* form */}
        <NvmForm/>
    </div>
  </div>
</>

    )
  }
}
export default NvmApp
