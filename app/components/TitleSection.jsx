import React from 'react'

const TitleSection = ({ title, subTitle }) => (
  <div className="text-center m-auto mb-20 md:w-1/2">
    <h4 className="font-bold text-color-secondary mb-4">{subTitle}</h4>
    <h2 className="text-3xl md:text-4xl font-bold leading-snug">{title}</h2>
  </div>
)

export default TitleSection
