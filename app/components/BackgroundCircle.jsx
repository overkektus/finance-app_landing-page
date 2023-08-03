import React from 'react'

const colors = {
  blob: 'bg-color-blob',
  secondary: 'bg-color-secondary',
}

const BackgroundCircle = (props) => {
  const color = colors[props.color] || colors.secondary
  return (
    <div
      className={`w-80 h-80 ${color} absolute ${props.position} blur-2xl opacity-30 rounded-full`}
    ></div>
  )
}

export default BackgroundCircle
