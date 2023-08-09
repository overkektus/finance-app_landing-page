import React from 'react'
import classNames from 'classnames'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureList = ({ value }) => (
  <ul className="space-y-4 pb-10">
    {value.map((feature, index) => (
      <li key={index}>
        <FontAwesomeIcon
          className={classNames({
            'text-color-secondary': feature.isAvaliable,
            'text-color-gray': !feature.isAvaliable,
          })}
          icon={faBookmark}
        />
        <span className="pl-4">{feature.name}</span>
      </li>
    ))}
  </ul>
)

export default FeatureList
