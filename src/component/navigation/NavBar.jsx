import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-between'>
      <h1 className='font-black text-white'>Read<span className='text-yellow-400'>it</span>.</h1>
        <ul className='flex justify-end gap-5'>
            <Link href='/'>
              <li>home</li>
            </Link>
            <Link href='/about'>
              <li>about</li>
            </Link>
            <Link href='/contact'>
              <li>contact</li>
            </Link>
            <Link href='/post/23'>
              <li>post</li>
            </Link>
            
        </ul>
    </div>
  )
}
