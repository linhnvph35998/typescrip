import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

const Header = () => {
  return (
    <header className='header'>
      <nav className='menu'>
        <img
          src='https://th.bing.com/th?&id=OVP.SB4hE9JSUFKXAkK9R8zn1QDIDI&w=271&h=152&c=7&pid=2.1&rs=1'
          alt=''
          className='logo'
        />
        <ul className='list-menu'>
          <li>
            <NavLink to='/' className='item-menu'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' className='item-menu'>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='item-menu'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/register' className='item-menu'>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin' className='item-menu'>
              Admin Page
            </NavLink>
          </li>
        </ul>
      </nav>
      <form className='regiter'>
        <input className='input-register' type='email' required placeholder='Email Address' />
        <br />
        <input type='submit' value='Đăng ký' id='submit' className='btn-register-footer' />
      </form>
    </header>
  )
}

export default Header
