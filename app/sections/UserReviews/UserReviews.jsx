'use client'
import React from 'react'
import Image from 'next/image'
import User1 from '@/app/assets/img/user1.webp'
import User2 from '@/app/assets/img/user2.webp'
import User3 from '@/app/assets/img/user3.webp'
import User4 from '@/app/assets/img/user4.webp'
import User5 from '@/app/assets/img/user5.webp'
import TitleSection from '@/app/components/TitleSection'
import UserCard from './components/UserCard'

const users = [
  {
    name: 'Markin Nesus',
    photo: {
      image: User1,
      alt: 'User 1',
    },
    review:
      'This should be used to tell a story and include any testimonials you might have about your product or service for your clients',
    position: 'IOS Developer',
  },
  {
    name: 'Markin Nesus',
    photo: {
      image: User2,
      alt: 'User 2',
    },
    review:
      'This should be used to tell a story and include any testimonials you might have about your product or service for your clients',
    position: 'Flutter Developer',
  },
  {
    name: 'Markin Nesus',
    photo: {
      image: User3,
      alt: 'User 3',
    },
    review:
      'This should be used to tell a story and include any testimonials you might have about your product or service for your clients',
    position: 'Android Developer',
  },
  {
    name: 'Markin Nesus',
    photo: {
      image: User4,
      alt: 'User 4',
    },
    review:
      'This should be used to tell a story and include any testimonials you might have about your product or service for your clients',
    position: 'React Developer',
  },
  {
    name: 'Markin Nesus',
    photo: {
      image: User5,
      alt: 'User 5',
    },
    review:
      'This should be used to tell a story and include any testimonials you might have about your product or service for your clients',
    position: 'Angular Developer',
  },
]

const UserReviews = () => {
  const [activeUser, setActiveUser] = React.useState(0)

  const handleChangeActiveUser = index => setActiveUser(index)

  return (
    <section id="testimonial">
      <div className="container py-20">
        <TitleSection
          title="What Clients Say About Our App After User It"
          subTitle="User Review"
        />

        <div className="mt-8">
          <div className="flex items-center justify-center flex-wrap">
            {users.map((user, index) => (
              <Image
                key={index}
                className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic ${
                  activeUser === index ? 'active-pic' : ''
                }`}
                src={user.photo.image}
                alt={user.photo.alt}
                onClick={() => handleChangeActiveUser(index)}
              />
            ))}
          </div>
          <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
            {users.map((user, index) => (
              <UserCard {...user} isActive={activeUser === index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserReviews
