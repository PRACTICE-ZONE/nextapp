'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [provider, setProvider] = useState(null);

  useEffect(() => {
  
  
  }, [])
  

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg"
         alt="Promptopia"
         width={40}
         height={40}
         className='object-contain'
          />
          <p className='logo_text'>Promptia</p>
      </Link>
      <div className="sm:flex hidden">
        { isUserLoggedIn ? (<div className='flex gap-3 md:gap-5'>
          <Link href="/create-prompt" className='black_btn'>
            Create Post
          </Link>
          <button className="outline_btn" type='button' onClick={signOut}>Sign out</button>
          <Link href="/profile">
            <Image
             className='rounded_full'
             src="/assets/images/logo.svg"
              width={37} height={37} alt="profile" />
          </Link>
        </div>) : ( <></>)}
      </div>
    </nav>
  )
}

export default Nav