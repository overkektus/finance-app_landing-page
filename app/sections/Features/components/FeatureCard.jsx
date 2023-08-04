import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureCard = ({ icon, title, description }) => (
  <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
    <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
      <FontAwesomeIcon className="text-4xl" icon={icon} />
    </div>
    <h3 className="text-xl font-bold py-4">{title}</h3>
    <p className="leading-relaxed">{description}</p>
  </div>
)

export default FeatureCard
