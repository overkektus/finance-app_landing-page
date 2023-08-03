import React from 'react'
import Header from '@/app/sections/Header/Header'
import Main from '@/app/sections/Main/Main'
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
    </div>
  )
}
