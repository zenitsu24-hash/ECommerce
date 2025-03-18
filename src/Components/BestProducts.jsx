import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestProducts = () => {

    const { products } = useContext(ShopContext);
    const [bestproducts, setBestProducts] = useState([])

    useEffect(() => {
        const bestseller = products.filter((item)=>item.bestseller);
        setBestProducts(bestseller.slice(0,5));
    }, [])


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
      <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea dolor accusantium, quaerat nostrum laudantium autem quia blanditiis debitis nihil aliquid nemo obcaecati quam ipsa itaque, mollitia unde! Esse, incidunt.
            </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestproducts.map((items,index) => (
                <ProductItem key={index} id={items._id} name={items.name} image={items.image} price={items.price} />
            ))
        }
      </div>
    </div>
  )
}

export default BestProducts
