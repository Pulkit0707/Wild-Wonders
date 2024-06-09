import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://www.kxan.com/wp-content/uploads/sites/40/2023/03/IMG_5262-1.jpg?w=900'></img>
        <div>
          <h3>Hello {user?.email}</h3>
            <h2 className='checkout_title'>
                Your Donations
            </h2>
            {basket.map(item=>(
              <CheckoutProduct
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
