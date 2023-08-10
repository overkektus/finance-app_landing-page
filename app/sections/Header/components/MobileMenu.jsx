'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import menuList from '@/app/constants/menuList'
import MenuItem from './MenuItem'

const MobileMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsNavOpen((prev) => !prev)
  }

  return (
    <>
      <div
        id="hamburger"
        className="lg:hidden cursor-pointer"
        onClick={handleToggleMenu}
      >
        <FontAwesomeIcon icon={faBars} style={{ fontSize: 25 }} />
      </div>

      <div
        id="menu"
        className="bg-color-primary-dark h-[100vh] absolute inset-0"
      >
        <ul className="h-full grid place-items-center py-20">
          {menuList.map((menu, index) => (
            <MenuItem key={index}>{menu}</MenuItem>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
