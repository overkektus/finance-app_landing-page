import React from 'react'
import classNames from 'classnames'

const UserCard = ({ name, review, position, isActive }) => (
  <div className={classNames('user-text', { 'active-text': isActive })}>
    <p className="md:text-2xl mb-6">{review}</p>
    <h4 className="font-bold text-color-secondary mb-1">{name}</h4>
    <p>{position}</p>
  </div>
)

export default UserCard
