import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
        <ul className='flex'>
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
