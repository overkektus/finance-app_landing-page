import menuList from '@/app/constants/menuList'
import React from 'react'
import MenuItem from './components/MenuItem'

const Header = () => (
  <header>
    <nav className="container flex justify-between items-center">
      <div className="py-5 text-color-secondary font-bold text-3xl">
        <a href="#home">
          <span className="text-color-white">Light</span>Code.
        </a>
      </div>
      <div>
        <ul className="flex items-center space-x-6">
          {menuList.map((menu, index) => (
            <MenuItem key={index}>{menu}</MenuItem>
          ))}
          <li>
            <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
              free trial
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
