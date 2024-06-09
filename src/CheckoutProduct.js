import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({image,title,price,rating}) {
    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title,
        })
    }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image}/>
      <div className='checkoutPruduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
            <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket} className='removeButton'>Remove</button>
      </div>
      <div className='checkoutProduct_rating'>
        {Array(rating).fill().map((_,i)=>(
            <p><StarIcon/></p>
        ))
        }
      </div>
    </div>
  )
}

export default CheckoutProduct
