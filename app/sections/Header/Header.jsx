'use client'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import menuList from '@/app/constants/menuList'
import Button from '@/app/components/Button'
import MenuItem from './components/MenuItem'
import MobileMenu from './components/MobileMenu'

const Header = () => {
  const [isHeaderOnTop, setIsHeaderOnTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderOnTop(true)
      } else {
        setIsHeaderOnTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={classNames('sticky top-0 z-50', {
        'bg-color-primary-dark border-b border-color-gray': isHeaderOnTop,
      })}
    >
      <nav className="container flex justify-between items-center">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <span className="text-color-white">Light</span>Code.
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            {menuList.map((menu, index) => (
              <MenuItem key={index}>{menu}</MenuItem>
            ))}
            <li>
              <Button>free trial</Button>
            </li>
          </ul>
        </div>

        {/* <MobileMenu /> */}
      </nav>
    </header>
  )
}

export default Header
