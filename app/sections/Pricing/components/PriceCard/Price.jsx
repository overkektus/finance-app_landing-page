import React from 'react'

const Price = ({ value, isPerMonth }) => (
  <div className="relative">
    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
      {value}{' '}
      <span className="text-sm font-normal tracking-widest">
        {isPerMonth ? '/per month' : '/per year'}
      </span>
    </p>
  </div>
)

export default Price
