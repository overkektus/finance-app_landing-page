import React from 'react'
import classNames from 'classnames'
import FeatureList from './FeatureList'
import Price from './Price'
import BillPlan from './BillPlan'

const PriceCard = ({ plan, isToggled }) => (
  <div className="card relative h-auto w-auto">
    {/* front side */}
    <div
      className={classNames(
        'front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full',
        { '-rotate-y-180': isToggled },
      )}
    >
      <Price value={plan.priceMonthly} isPerMonth={true} />

      <BillPlan name={plan.name} description={plan.description} />

      <FeatureList value={plan.featuresList} />

      <button className="card_btn">Get Started</button>
    </div>

    {/* back side */}
    <div
      className={classNames(
        'back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0',
        { 'rotate-y-180': !isToggled },
      )}
    >
      <Price value={plan.priceAnnually} isPerMonth={false} />

      <BillPlan name={plan.name} description={plan.description} />

      <FeatureList value={plan.featuresList} />

      <button className="card_btn">Get Started</button>
    </div>
  </div>
)

export default PriceCard
