import React, { Component } from 'react'

export default class NvmEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state={
            nvmStudentName:'Văn Minh',
        }
    }
    //Hàm xử lí sự kiện khi dữ liệu trên textbox (nvmStudentName) thay đổi
 nvmHandleChange =(event)=>{
    //Cập nhật lại state
    this.setState({
        nvmStudentName:event.target.value,
    })
 }
 //Khi submit form, lấy dữ liệu và hiển thị
 nvmHandleSubmit =(ev)=>{
    alert('Xin Chào:'+this.state.nvmStudentName);
    ev.preventDefault();
 }
  render() {
    return (
      <div className='alert alert-info'>
        <h2> Form Input</h2>
        <form>
            <label htmlFor='nvmStudentName'>
                <input type='text' name='nvmStudentName' id='nvmStudentName' 
                    value={this.state.nvmStudentName}
                    onChange={this.nvmHandleChange}
                />
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    );
  }
}
