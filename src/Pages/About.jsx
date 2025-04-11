import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../Components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md: w-2/4 text-gray-600'>
          <p>Discover the perfect blend of style and functionality with our latest collection. Crafted from premium materials and designed with attention to detail, each product offers comfort, durability, and modern appeal. Whether you're shopping for everyday essentials or statement pieces, we have something to suit every taste and budget. Enjoy seamless shopping, fast delivery, and quality you can trust — all in one place.</p>
          <p>Elevate your everyday with our thoughtfully curated selection of products. From timeless classics to the latest trends, each item is handpicked to bring value, quality, and style into your life. Our easy-to-use platform and secure checkout make shopping a breeze — so you can focus on finding exactly what you need, when you need it. Experience convenience, confidence, and customer care all in one place.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to make quality products accessible, affordable, and enjoyable for everyone. We strive to create a seamless shopping experience built on trust, innovation, and customer satisfaction. By focusing on curated selections, exceptional service, and continuous improvement, we aim to become your go-to destination for everything you love — delivered with care and integrity.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We take pride in offering products that meet the highest standards of quality. Every item in our store is carefully selected and thoroughly inspected to ensure it delivers both durability and satisfaction. Our commitment to quality means you can shop with confidence, knowing you’re getting reliable and well-crafted goods every time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Your time matters, and so does your experience. That’s why our platform is built for speed, simplicity, and ease. From intuitive navigation to quick checkout and fast delivery, we’re here to make your shopping journey smooth and stress-free — anytime, anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We believe great service makes all the difference. Our support team is friendly, responsive, and always ready to help — whether you have a question, need a recommendation, or want to resolve an issue. We're here to make sure you feel valued and supported every step of the way.</p>
        </div>
      </div>

      <NewsLetter />
    </div>
  )
}

export default About
