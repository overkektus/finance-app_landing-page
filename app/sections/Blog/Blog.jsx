import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import BlogCard from './components/BlogCard'

const posts = [
  {
    id: 'f28e8d65-02ff-4522-8e45-22a925e1fd0a',
    image: 'blog1.jpg',
    date: '20 August 2022',
    minutesToRead: 1,
    title: 'Four ways to cheer yourself up on Blue Monday!',
    description:
      'On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate',
  },
  {
    id: '82f01754-841c-4c78-89e6-7e0eacc0df08',
    image: 'blog1.jpg',
    date: '20 August 2022',
    minutesToRead: 1,
    title: 'Four ways to cheer yourself up on Blue Monday!',
    description:
      'On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate',
  },
  {
    id: '6afeb186-7bf9-4d5c-bbd2-0e9c250e8fdb',
    image: 'blog1.jpg',
    date: '20 August 2022',
    minutesToRead: 1,
    title: 'Four ways to cheer yourself up on Blue Monday!',
    description:
      'On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate',
  },
]

const Blog = () => (
  <section id="blog">
    <div className="container py-20">
      <TitleSection
        title="Latest Updates, Solutions And Company News"
        subTitle="Innovation And Quality Improvement"
      />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </section>
)

export default Blog
