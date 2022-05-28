import React from 'react'
import StatusFormu from './StatusFormu'

const StatusEkle = (props) => {
  console.log("StatusEkle: ",props)
  return (
    <div>
      <h1>Status Ekleme Formu</h1>
      <StatusFormu />
      
    </div>
  )
}

export default StatusEkle;
