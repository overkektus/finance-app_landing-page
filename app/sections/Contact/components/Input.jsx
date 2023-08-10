import React from 'react'

const Input = ({ type, placeholder }) => (
  <input
    type={type}
    class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
    placeholder={placeholder}
  />
)

export default Input
