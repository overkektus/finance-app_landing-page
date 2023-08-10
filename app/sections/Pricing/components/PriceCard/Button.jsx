import React from 'react'

const Button = ({ children }) => (
  <button className="w-full px-9 py-3 bg-color-primary-dark rounded-md capitalize font-bold hover:bg-color-secondary ease-in duration-200">
    {children}
  </button>
)

export default Button
