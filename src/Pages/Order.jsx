import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';

const Order = () => {

  const { products, currency} = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          products.slice(1,4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} alt='' className='w-16 sm:w-20' />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>24, Jan, 2025</span></p>
                </div>
              </div> 
            </div>  
          ))
        }
      </div>
    </div>
  )
}

export default Order
