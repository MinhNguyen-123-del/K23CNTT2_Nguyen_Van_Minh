import React, { Component } from 'react'
import NvmLoginComp from './NvmLoginComp';
import NvmLogoutComp from './NvmLogoutComp';

export default class NvmLoginControl extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
        }
    }
    //Hàm xử lí sự kiện Login
    nvmHandleLogin=(event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
  render() {
    let {isLoggedIn}=this.state
    let nvmElement=isLoggedIn?<NvmLoginComp/>:<NvmLogoutComp/>
    return (
      <div className='alert alert-danger'>
        {nvmElement}
        {
            isLoggedIn?
                <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button>
                :<button onClick={this.nvmHandleLogin}>Login</button>
        }
      </div>
    );
  }
}
