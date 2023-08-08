import React from 'react'

const UserCard = ({ name, review, position, isActive }) => (
  <div className={`user-text ${isActive ? 'active-text' : ''}`}>
    <p className="md:text-2xl mb-6">{review}</p>
    <h4 className="font-bold text-color-secondary mb-1">{name}</h4>
    <p>{position}</p>
  </div>
)

export default UserCard
