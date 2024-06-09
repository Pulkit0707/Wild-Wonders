import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

function Header() {
  const [{basket,user},dispatch]=useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
      <img className="header_logo" 
      src="https://pbs.twimg.com/profile_images/1477353769239080961/yNJBtClh_400x400.jpg"></img>
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'></SearchIcon>
      </div>
      <div className='header_nav'>
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>Hello</span>
            <span className='header_optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <Link to='/merch'>
        <div className='header_option'>
        <span className='header_optionLineOne'>Buy</span>
            <span className='header_optionLineTwo'>Merch</span>
        </div>
        </Link>
        <Link to='/checkout'>
        <div className='header_optionBasket'>
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
