import { useState } from 'react'
import { ProductList } from './ProductList'
import './App.css'

function App() {
  const props = [
    { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
    { id: 2, name: "Молоко", price: 60, category: "Молочные" },
    { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
  ]
 
  return(<ProductList props= {props}/>)
}

export default App
