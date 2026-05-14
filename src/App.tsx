import { useState } from 'react'
import { ProductList } from './ProductList'
import './App.css'

function App() {
  const products = [
    { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
    { id: 2, name: "Молоко", price: 60, category: "Молочные" },
    { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
  ]
  {console.log('App')}
  return(<ProductList products= {products}/>
  )
}

export default App
