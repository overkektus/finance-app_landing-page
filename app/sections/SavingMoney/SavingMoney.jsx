import React from 'react'
import Image from 'next/image'
import Hero3 from '@/app/assets/img/hero3.png'
import Button from '@/app/components/Button'
import BackgroundCircle from '@/app/components/BackgroundCircle'

const SavingMoney = () => (
  <section id="saving-money">
    <div className="container py-20 relative">
      <BackgroundCircle color="bg-color-blob" position="top-10 -left-5" />
      <BackgroundCircle
        color="bg-color-secondary"
        position="bottom-10 right-0"
      />
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-12 md:w-1/2">
          <Image src={Hero3} alt="alt" />
        </div>
        <div className="text-center md:text-left md:w-1/2 md:ml-20">
          <h4 className="font-bold text-color-secondary mb-4">Saving Money</h4>
          <h2 className="text-3x1 md:text-4×1 font-bold leading-snug mb-4">
            Best Financing App To Save Your Money
          </h2>
          <p className="leading-relaxed">
            Best financing app ever in the world. Easy to use and very user
            friendly for mobile banking. You can control your card easily and
            send money some one just one click.
          </p>
          <Button>Read more</Button>
        </div>
      </div>
    </div>
  </section>
)

export default SavingMoney
