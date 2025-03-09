import React, { Component } from 'react'
import NvmControl from './components/NvmControl'
import NvmStudentList from './components/NvmStudentList'
import NvmForm from './components/NvmForm'

 class NvmApp extends Component {
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
        <NvmStudentList/>
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
