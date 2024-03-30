import React from 'react'

type Props = {}

const ProductAdd = (props: Props) => {
  return (
    <div>
      <form>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Ten san pham
          </label>
          <input type='text' className='form-control' />
          <div id='title' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='price' className='form-label'>
            Gia san pham
          </label>
          <input type='text' className='form-control' />
          <div id='price' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAdd
