import React from 'react'
import Image from 'next/image'
import CallToAction from '@/app/components/CallToAction'
import BackgroundCircle from '@/app/components/BackgroundCircle'
import Hero4 from '@/app/assets/img/hero4.png'

const Main = () => (
  <main>
    <section id="home" className="relative">
      <BackgroundCircle color="blob" position="top-0 -left-5" />
      <BackgroundCircle color="secondary" position="bottom-10 right-0" />
      <div className="container py-20 z-10">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Awesome App for Your Financial.
            </h1>
            <p className="leading-relaxed mb-10">
              This should be used to tell a story and let you users know a
              little more about app and it's use, How benefit them.
            </p>
            <CallToAction>download app</CallToAction>
          </div>

          <div className="md:w-1/2">
            <Image src={Hero4} alt="alt" />
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Main
