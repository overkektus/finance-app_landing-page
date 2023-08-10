import React from 'react'
import Image from 'next/image'
import IOSStoreDark from '@/app/assets/img/ios-store-dark.png'
import GPlayDark from '@/app/assets/img/g-play-dark.png'

const DownloadApp = () => (
  <section id="download-app" className="bg-color-primary-light">
    <div className="container h-[80vh] grid place-items-center">
      <div className="text-center md:w-2/3 m-auto">
        <h1 className="title">Download App Now And Save Your Money</h1>
        <p className="leading-relaxed pt-5">
          Serving an impressive list of long-term money with experience and
          expertise in multiple industries.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
          <a
            href="#"
            className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
          >
            <Image src={IOSStoreDark} />
          </a>
          <a
            href="#"
            className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
          >
            <Image src={GPlayDark} />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default DownloadApp
