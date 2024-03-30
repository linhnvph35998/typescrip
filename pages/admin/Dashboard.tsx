import React from 'react'
import { Product } from '../../common/Product'
import { Link } from 'react-router-dom'

type Props = {
  products: Product[]
}

const Dashboard = ({ products }: Props) => {
  return (
    <>
      <h1>Hello, admin</h1>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new product
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={140} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                <button className='btn btn-danger'>Delete</button>
                <button className='btn btn-warning'>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Dashboard