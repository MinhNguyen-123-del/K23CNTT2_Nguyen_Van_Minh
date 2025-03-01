import React, { Component } from 'react'
import NvmEventForm1 from './components/NvmEventForm1';
import NvmEventForm2 from './components/NvmEventForm2';
import NvmEventForm3 from './components/NvmEventForm3';
import NvmEventForm4 from './components/NvmEventForm4';

export default class NvmApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form -Demo</h1>
        <hr/>
        <NvmEventForm1 />
        <NvmEventForm2 />
        <NvmEventForm3/>
        <NvmEventForm4 />
      </div>
    );
  }
}
