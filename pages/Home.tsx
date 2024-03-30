import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '~/common/Product'
import Banner from '~/components/Banner'

interface Props {
  products: Product[]
}
const Home = ({ products }: Props) => {
  return (
    <div>
      <Banner />
      <br></br>
      <h2>Sản phẩm bán chạy</h2>
      {products.map((product) => (
        <div className='content'>
          <div className='item-content'>
            <div key={product.id}>
              <Link to={`/shop/${product.id}`}>
                <img className='img-content' width={100} src={product.thumbnail} alt={product.title} />
              </Link>
              <Link to={`/shop/${product.id}`}>
                <h2 className='title-content'>{product.title}</h2>
              </Link>
              <p className='price-content'>{product.price}</p>
              <p className='text-des'>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
