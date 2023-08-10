import React from 'react'
import classNames from 'classnames'

const Step = ({ title, nummer }) => {
  return (
    <div className="text-center cursor-pointer">
      <div
        className={classNames(
          'relative inline-block px-6 py-3 rounded-lg',
          { 'bg-color-secondary': nummer % 2 === 0 },
          {
            'bg-color-primary-dark hover:bg-color-secondary ease-in duration-200':
              nummer % 2 !== 0,
          },
        )}
      >
        <p
          className={classNames(
            "text-6xl lg:after:content-[''] lg:after:flex lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52",
            { "lg:after:bg-[url('/img/line.png')]": nummer == 1 },
            { "lg:after:bg-[url('/img/line-bottom.png')]": nummer == 2 },
          )}
        >
          {nummer}
        </p>
      </div>
      <h3 className="text-xl font-bold py-4">{title}</h3>
    </div>
  )
}

export default Step
