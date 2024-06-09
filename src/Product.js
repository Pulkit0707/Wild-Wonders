import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating,type}) {
  const [state,dispatch]=useStateValue()
  const addToBasket=()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
            <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(rating).fill().map((_,i)=>(
                <StarIcon/>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addToBasket}>{type}</button>
    </div>
  )
}

export default Product
