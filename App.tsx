import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Notfound from './pages/Notfound'
import { useEffect, useState } from 'react'
import { Product } from './common/Product'
import instance from './apis'
import Dashboard from './pages/admin/Dashboard'
import Login from './pages/Login'
import ProductAdd from './pages/admin/ProductAdd'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await instance.get('/products')
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])
  return (
    <>
      <main className='container'>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop/:productId' element={<ProductDetail />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<Dashboard products={products} />} />
            <Route path='/admin/add' element={<ProductAdd />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
