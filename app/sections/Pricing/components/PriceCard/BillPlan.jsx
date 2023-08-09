import React from 'react'

const BillPlan = ({ name, description }) => (
  <div className="py-10">
    <h3 className="text-xl font-bold pb-3">{name}</h3>
    <p className="leading-relaxed">{description}</p>
  </div>
)

export default BillPlan
