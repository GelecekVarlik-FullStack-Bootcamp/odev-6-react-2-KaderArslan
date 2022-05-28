import React, { useState } from 'react'
import Styled from './Ekle.styled'

function Ekle({ onSave }) {

  const [title, setTitle] = useState('')
  const [categoryId, setCategoryId] = useState('all')
  const [statusId, setStatusId] = useState('all')
  
  
  return (
    <Styled>

      {/* <span className='baslik'>todo ekle</span> */}
      <input
        placeholder="Todo Title"
        value={title}
        onChange={(e) => {
            setTitle(e.target.value)
        }}
      />
      <select onChange={(e) => setStatusId(e.target.value)}>
          <option value="avatar">Avatar</option>
          <option value="simpsons">Simpsons</option>
          <option value="all">All</option>
      </select>

      <select onChange={(e) => setCategoryId(e.target.value)}>
          <option value="avatar">Avatar</option>
          <option value="simpsons">Simpsons</option>
          <option value="all">All</option>
      </select>
      
      <button
        onClick={() => {
          onSave(title)
          setTitle('')
        }}
      >
        Ekle
      </button>
 
    </Styled>
  )
}
export default Ekle
