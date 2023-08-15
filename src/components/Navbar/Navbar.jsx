import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../components/Navbar/logo.png'
import search from '../../components/Navbar/search.png'
import './Navbar.css'
import Avatar from '../Avatar/Avatar.jsx'
 
const Navbar = () => {
  var User = null
  return (
    
      <nav className='main-nav'>
        <div className='navbar'>
          <Link to='/' className='nav-item nav-logo'>
         <img src={logo}alt='logo'/>
         </Link>
        <Link to="about"  className='nav-item nav-btn' >about</Link>
         <Link to="products"className='nav-item nav-btn'>products</Link>
         <Link to="teams" className='nav-item nav-btn'>for teams</Link>
        <form>
          <input type="text" placeholder="serach"/>
          <img src={search} alt='search'width='18' className='search-icon'/>
        </form>      
        {User === null ? (
  <>
    <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
  </>
) : (
  <>
    <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%'><Link to='/User' style={{color:'white' ,textDecorarion:'none'}}>M</Link></Avatar>
    <button className='nav-item nav-links'>Log out</button>
  </>
)}



        </div>
      </nav>
 
  )
}

export default Navbar
