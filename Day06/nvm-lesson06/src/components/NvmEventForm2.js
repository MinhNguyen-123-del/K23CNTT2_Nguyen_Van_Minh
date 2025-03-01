import React, { Component } from 'react'

 class  NvmEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nvmCourse:'CSS'
        }
    }
    //Hàm xử lý sự kiện khi thay đổi khóa học
    nvmHandleChange=(event)=>{
        //cập nhật lại state
        this.setState({
            nvmCourse:event.target.value,
        })
    }
    //Hàm xử lí sự kiện khi submit form
    nvmHandleSubmit=(event)=>{
        alert("Khóa Học bạn chọn"+this.state.nvmCourse);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2> Form Select</h2>
        <form>
            <label htmlFor=''>
                <select name='nvmCourse' id='nvmCourse' 
                value={this.state.nvmCourse}
                onChange={this.nvmHandleChange}
                >
                    <option value={'HTML5'}> HTML5</option>
                    <option value={'CSS3'}> CSS3</option>
                    <option value={'Javacript'}> Javacript</option>
                    <option value={'Jquery'}> Jquery</option>
                    <option value={'Bootstrap'}>Bootstrap</option>
                </select>
            </label>
            <button className='btn btn-primary'onClick={this.nvmHandleSubmit}>Click here</button>
        </form>
      </div>
      
    );
  }
}
export default NvmEventForm2