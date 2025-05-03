import React, { useEffect, useState } from 'react'

import Header from './Components/Header'
import Home from './Components/Home'
import Card from './Components/Card';
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import productList from './Components/Data';
import Electronic from './Components/Electronic';
import clotsList from './Components/Fashion';
import Mans from './Components/Mans';
import Woman from './Components/Woman'



function App() {

  const [productId, setProductId] = useState('')
  const [allProduct, setAllProduct] = useState([])
  const [itemId, setItemId] = useState('')


//Add product to cart
  useEffect(() => {
    const filteredObject = productList.filter(
      (product) => product.id == productId)
    setAllProduct([...allProduct, ...filteredObject])
  }, [productId])

  useEffect(() => {
    const filteredObject = clotsList.filter(
      (item) => item.id == itemId)
    setAllProduct([...allProduct, ...filteredObject])
  }, [itemId])

  return (

    <div>
      <Header allProduct={allProduct} />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home setItemId={setItemId} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/card' element={<Card allProduct={allProduct} setAllProduct={setAllProduct} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/electronic' element={<Electronic setProductId={setProductId} />} />
        <Route path='/mans' element={<Mans setItemId={setItemId} />} />
        <Route path='/woman' element={<Woman setItemId={setItemId} />} />
      </Routes>

    </div>
  )
}

export default App;
