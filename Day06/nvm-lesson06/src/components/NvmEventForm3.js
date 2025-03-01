import React, { Component } from 'react'

export default class NvmEventForm3 extends Component {
  constructor(props){
    super(props);
    this.state={
        nvmGioiTinh:'Nam',
    }
  }
  //Hàm xử lí sự kiện change
  nvmHandleChange=(event)=>{
    this.setState({
      nvmGioiTinh:event.target.value,
    })
  }
  //Hàm xử lý sụ kiện submit form
  nvmHandleSubmit =(event)=>{
     event.preventDefault();
     alert("Giới tính của bạn là:"+this.state.nvmGioiTinh)
  }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form input-radio</h2>
        <form>
            <div>
                <label htmlFor=''>Giới Tính</label>
                <input type='radio' name='nvmGioiTinh' value='Nam' id='nvmNam' checked={this.state.nvmGioiTinh==='Nam'} onChange={this.nvmHandleChange} />
                  <label htmlFor='nvmNam'>Nam</label>  
                <input type='radio' name='nvmGioiTinh' value='Nam' id='nvmNu'checked={this.state.nvmGioiTinh==='Nu'} onChange={this.nvmHandleChange} />
                  <label htmlFor='nvmNu'>Nữ</label>
                <input type='radio' name='nvmGioiTinh' value='Khac' id='nvmKhac' checked={this.state.nvmGioiTinh==='Khac'} onChange={this.nvmHandleChange}/>
                  <label htmlFor='nvmKhac'>Khác</label>
            </div>
            <button onClick={this.nvmHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
