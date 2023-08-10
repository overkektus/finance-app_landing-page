import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import Step from './components/Step'

const steps = [
  {
    title: 'Install The App',
  },
  {
    title: 'Setup Your Profile',
  },
  {
    title: 'Enjoy The Features!',
  },
]

const HowItWorks = () => (
  <section id="how-it-works" className="bg-color-primary-light">
    <div className="container py-20">
      <TitleSection title="Grow Up Your Money Saving" subTitle="How It Works" />

      <div className="flex flex-col items-center justify-between space-x-6 md:flex-row md:space-y-0 md:space-x-6">
        {steps.map((step, index) => (
          <Step key={index} {...step} nummer={index + 1} />
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorks
