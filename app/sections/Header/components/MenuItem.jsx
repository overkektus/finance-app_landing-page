import React from 'react'

const MenuItem = ({ children }) => (
  <li>
    <a
      href={`#${children}`}
      className="hover:text-color-secondary ease-in duration-200 caption-top"
    >
      {children}
    </a>
  </li>
)

export default MenuItem
