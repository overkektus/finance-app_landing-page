import React from 'react'

const Button = ({ children }) => (
  <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
    {children}
  </button>
)

export default Button
