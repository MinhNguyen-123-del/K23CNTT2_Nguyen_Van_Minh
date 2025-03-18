import React from 'react'
import NvmReactApiLocal from './components/NvmReactApiLocal'
import NvmReactMockAPI from './components/NvmReactMockAPI'
import NvmCreateMockAPI from './components/NvmCreateMockAPI'

export default function NvmApp() {
  return (
    <div>
      <h1>React - API - Nguyễn Văn Minh</h1>
      <hr/>
      <NvmReactApiLocal/>
      <hr/>
      <h2>Đọc dữ liệu từu mốc API(mockapi.io)</h2>
      <NvmReactMockAPI/>
      <hr/>
      <NvmCreateMockAPI/>
    </div>
  )
}
