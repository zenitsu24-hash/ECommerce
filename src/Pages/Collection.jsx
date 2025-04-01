import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  const [filterproducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const togglecategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const togglesubcategory = (e) => {

    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyfilter = () => {

    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    let productsCopy = products.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(productsCopy.sort((a,b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(productsCopy.sort((a,b) => (b.price - a.price)));
        break;
        
      default:
        applyfilter();
        break;  
    }
  }
  
  useEffect(() => {
    setFilterProducts(products);
  },[])

  useEffect(() => {
    applyfilter();
  }, [category,subCategory,search,showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} alt='' className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onClick={togglecategory} className='w-3' type='checkbox' value={'Men'}/>MEN
            </p>
            <p className='flex gap-2'>
              <input onClick={togglecategory} className='w-3' type='checkbox' value={'Women'}/>WOMEN
            </p>
            <p className='flex gap-2'>
              <input onClick={togglecategory} className='w-3' type='checkbox' value={'Kids'}/>KIDS
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onClick={togglesubcategory} className='w-3' type='checkbox' value={'Topwear'}/>TOPWEAR
            </p>
            <p className='flex gap-2'>
              <input onClick={togglesubcategory} className='w-3' type='checkbox' value={'Bottomwear'}/>BOTTOMWEAR
            </p>
            <p className='flex gap-2'>
              <input onClick={togglesubcategory} className='w-3' type='checkbox' value={'Winterwear'}/>WINTERWEAR
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e) =>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterproducts.map((items,index) => (
              <ProductItem key={index} id={items._id} name={items.name} image={items.image} price={items.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
