import React from 'react'
import Image from 'next/image'
import Blog1 from '@/app/assets/img/blog1.jpg'

const BlogCard = ({
  post: { image, date, minutesToRead, title, description },
}) => (
  <div>
    <div className="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
      <Image
        src={Blog1}
        className="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out"
      />
    </div>
    <div>
      <div className="flex items-center gap-5 py-5">
        <p>{date}</p>
        <p>{minutesToRead} min read</p>
      </div>
      <a
        href="#blog"
        className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline"
      >
        {title}
      </a>

      <p className="leading-relaxed my-5">{truncateText(description, 100)}</p>

      <a
        href="#blog"
        className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out"
      >
        <span className="tracking-wider capitalize underline hover:no-underline">
          Read more
        </span>
      </a>
    </div>
  </div>
)

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.slice(0, maxLength - 3) + '...'
  }
}

export default BlogCard
