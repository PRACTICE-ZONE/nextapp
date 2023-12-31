'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, getProviders, useSession } from 'next-auth/react';
import { set } from 'mongoose';
const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
  
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
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
              width={37} height={37} alt="profile"
               />
          </Link>
        </div>
        ) : ( 
        <>
          {
            providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button className="black_btn"
                type='button'
                onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            ))
          }
        </>
        )}
      </div>

      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        {
          isUserLoggedIn ? (
            <div className='flex'>
              <Image
             className='rounded_full'
             src="/assets/icons/link.svg"
              width={37} height={37} alt="profile"
              onClick={() => setToggleDropdown((prevState) => !prevState)}
               />
                {
                  toggleDropdown && (
                    <div className='dropdown'>
                        <Link href="/profile"
                        className='dropdown_link'
                        onClick={() => setToggleDropdown(false)}
                        >
                          Profile
                        </Link>
                        <Link href="/create-prompt"
                        className='dropdown_link'
                        onClick={() => setToggleDropdown(false)}
                        >
                          Create prompt
                        </Link>
                        <button className="mt-5 w-full black_btn" type='button' 
                        onClick={() => {
                          signOut()
                          toggleDropdown(false)
                          }
                          }>Sign out</button>
                    </div>)
                }
            </div>
          ) : (<>
             {
            providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button className="black_btn"
                type='button'
                onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            ))
          }
          </>)
            
        }
      </div>
    </nav>
  )
}

export default Nav