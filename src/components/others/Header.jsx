import React from 'react'

function Header() {
  return (
    <div className='flex items-end  text-white justify-between p-5  border-gray-300'>
      <h1 className='text-2xl font-medium '>Hello</h1>
      <button className='bg-red-500 text-lg font-medium  text-white px-5 py-2 rounded-sm'>log out</button>
    </div>
  )
}

export default Header
