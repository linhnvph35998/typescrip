import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Notfound = (props: Props) => {
  return (
    <div>
      <h1>404</h1>
      <h2>Not found</h2>
      <Link to='/'>Go to back Home</Link>
    </div>
  )
}

export default Notfound
