import React from 'react'
import {
  faCalendarDays,
  faChartLine,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import FeatureCard from './components/FeatureCard'

const features = [
  {
    title: 'Expense Trackering',
    description: 'We use an application designed a testing gnose to keep away',
    icon: faCalendarDays,
  },
  {
    title: 'Finance snapshot',
    description: 'We use an application designed a testing gnose to keep away',
    icon: faChartLine,
  },
  {
    title: 'Support 24/7',
    description: 'We use an application designed a testing gnose to keep away',
    icon: faPhone,
  },
]

const Features = () => (
  <section id="features" className="bg-color-primary-light">
    <div className="container py-20">
      <div className="text-center m-auto mb-20 md:w-1/2">
        <h4 className="font-bold text-color-secondary mb-4">Our Future</h4>
        <h2 className="text-3x1 md:text-4×1 font-bold leading-snug">
          Easy To Manage Your All Payments By Our App
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
)

export default Features
