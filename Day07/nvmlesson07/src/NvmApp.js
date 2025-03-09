import React, { Component } from 'react'
import NvmLoginControl from './components/NvmLoginControl';
import NvmRenderList from './components/NvmRenderList';
import NvmRenderListStudent from './components/NvmRenderListStudent';

export default class NvmApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Nguyễn Văn Minh- Render condition, List key</h1>
        <hr/>
        <NvmLoginControl/>
        <NvmRenderList/>
        <NvmRenderListStudent/>
      </div>
    );
  }
}
