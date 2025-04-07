import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    
    const { currency, delivery_fee, getTotalCart } = useContext(ShopContext);
    
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'} />    
        </div> 

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtototal</p>
                <p>{currency} {getTotalCart()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total</p>
                <p>{currency} {getTotalCart() === 0 ? 0 : getTotalCart() + delivery_fee}</p>
            </div>
        </div>     
    </div>
    
  )
}

export default CartTotal
