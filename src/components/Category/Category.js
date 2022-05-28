import React, { useState } from 'react'
import Styled from './Category.styled'

function Category({ onSave }) {

  const [title, setTitle] = useState('')
  
  return (
    <Styled>
    {/* <span className='baslik'>kategori ekle</span> */}
      <input
        placeholder="Kategori Title"
        value={title}
        onChange={(e) => {
            setTitle(e.target.value)
        }}
      />
      
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
export default Category
