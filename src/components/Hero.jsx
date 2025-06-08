import React from 'react'

const Hero = () => {
  return (
   <>
    <main className='hero container'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-btn'>
          <button className='btn-1'>Shop Now</button>
          <button className='btn-2'>Category</button>
        </div>
        <div className='shopping'>
          <p>Also Available On</p>
          <div className='brand-icon'>
            <img src="/amazon.png" alt="amazon_brand" />
            <img src="/flipkart.png" alt="amazon_brand" />
          </div>
        </div>
      </div>
      <div className='hero-img'>
        <img src="/hero-image.png" alt="" />
      </div>
    </main>
   </>
  )
}

export default Hero