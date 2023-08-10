import React from 'react'
import classNames from 'classnames'

const BackgroundCircle = ({ color, position }) => {
  return (
    <div
      className={classNames(
        'w-80 h-80 absolute ${props.position} blur-2xl opacity-30 rounded-full',
        color,
        position,
      )}
    ></div>
  )
}

export default BackgroundCircle
