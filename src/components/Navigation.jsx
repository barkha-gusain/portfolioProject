import React from 'react'

const Navigation = () => {
  return (
    <>
        <div>
        <nav className='container'>
          <div className=''>
            <img src='/brand_logo.png'/>
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button>Login</button>
        </nav>
      </div>
    </>
  )
}

export default Navigation