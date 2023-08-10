import React from 'react'
import Header from '@/app/sections/Header/Header'
import Main from '@/app/sections/Main/Main'
import Features from '@/app/sections/Features/Features'
import SavingMoney from '@/app/sections/SavingMoney/SavingMoney'
import HowItWorks from '@/app/sections/HowItWorks/HowItWorks'
import UserReviews from '@/app/sections/UserReviews/UserReviews'
import Pricing from '@/app/sections/Pricing/Pricing'
import Blog from '@/app/sections/Blog/Blog'
import DownloadApp from '@/app/sections/DownloadApp/DownloadApp'
import Contact from '@/app/sections/Contact/Contact'
import Footer from '@/app/sections/Footer/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

export default function Home() {
  return (
    <div className="bg-color-primary text-color-white tracking-wider">
      <Header />
      <Main />
      <Features />
      <SavingMoney />
      <HowItWorks />
      <UserReviews />
      <Pricing />
      <Blog />
      <DownloadApp />
      <Contact />
      <Footer />
    </div>
  )
}
