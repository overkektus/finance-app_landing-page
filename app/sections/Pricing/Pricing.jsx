'use client'
import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import PriceCard from './components/PriceCard/PriceCard'

const plans = [
  {
    name: 'Basic',
    description: 'For Beginner Who Want To Scale Business Globaly',
    priceMonthly: 20,
    priceAnnually: 120,
    featuresList: [
      { name: 'Expense Management', isAvaliable: true },
      { name: 'Card Management', isAvaliable: true },
      { name: 'Instant Statistics', isAvaliable: true },
      { name: 'Bookmark Function', isAvaliable: false },
      { name: 'Accounting System', isAvaliable: false },
    ],
  },
  {
    name: 'Standard',
    description: 'For Beginner Who Want To Scale Business Globaly',
    priceMonthly: 50,
    priceAnnually: 250,
    featuresList: [
      { name: 'Expense Management', isAvaliable: true },
      { name: 'Card Management', isAvaliable: true },
      { name: 'Instant Statistics', isAvaliable: true },
      { name: 'Bookmark Function', isAvaliable: true },
      { name: 'Accounting System', isAvaliable: false },
    ],
  },
  {
    name: 'Premium',
    description: 'For Beginner Who Want To Scale Business Globaly',
    priceMonthly: 100,
    priceAnnually: 500,
    featuresList: [
      { name: 'Expense Management', isAvaliable: true },
      { name: 'Card Management', isAvaliable: true },
      { name: 'Instant Statistics', isAvaliable: true },
      { name: 'Bookmark Function', isAvaliable: true },
      { name: 'Accounting System', isAvaliable: true },
    ],
  },
]

const Pricing = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <section id="pricing" className="bg-color-primary-light">
      <div className="container py-20">
        <TitleSection subTitle="Pricing" title="Get In Reasonable Price" />

        <div className="mt-5 mb-20 flex items-center justify-center gap-4">
          <p>Bill Monthly</p>
          <label className="cursor-pointer relative inline-block w-20 h-8 rounded-full">
            <input
              type="checkbox"
              id="toggleBtn"
              className="peer opacity-0 w-0 h-0"
              checked={toggle}
              onChange={() => setToggle(!toggle)}
            />
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
          </label>
          <p>Bill Annually</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PriceCard key={index} isToggled={toggle} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
