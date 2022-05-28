import React, { useState, useEffect } from 'react'
import { Ekle } from '../Ekle'
import { Category } from '../Category'
import { Listele } from '../Listele'

function ToDo() {

  const [tab, setTab] = useState("todo")
  
  const [categories, setCategories] = useState([])
  const [todo, setTodo] = useState('all')

  const [todos, setTodos] = useState([])

  const handleToDoEkle = (title) => {
    setTodos([
      ...todos,
      { title: title },
    ])
  }

  const handleCategoryEkle = (title) => {
    setCategories([
      ...categories,
      { title: title },
    ])

  }

  return (
    <div>

      <button onClick={() => setTab("todo")}>Todolar</button>
      <button onClick={() => setTab("categories")}>Kategoriler</button>

      <>

        {tab === "todo" ? 

        <div><Ekle onSave={handleToDoEkle} />
          <Listele list={todos} />
        </div>

        : 

        <div><Category onSave={handleCategoryEkle} />
          <Listele list={categories} />
        </div>}

      </>

    </div>
  )
}

export default ToDo
