import React from 'react'
import { string, element, object, oneOfType } from 'prop-types';

import { BadgeCheckIcon } from '@heroicons/react/solid'

const MetricCard = ({
  title = 'Title',
  content = '-',
  icon:Icon = BadgeCheckIcon,
}) => {

  return (
  <div className="bg-white border rounded shadow p-2">
    <div className="flex flex-row items-center">
      <div className="flex-shrink pr-4">
        <div className="rounded p-3 text-white bg-green-600">
          <Icon width={'2rem'}/>
        </div>
      </div>
      <div className="flex-1 text-right md:text-center">
        <h5 className="font-bold uppercase text-gray-500">{title}</h5>
        <h3 className="font-bold text-3xl">{content}</h3>
      </div>
    </div>
  </div>
  )
}

MetricCard.propTypes = {
  title: string,
  content: oneOfType([
    string,
    element,
  ]),
  icon: object,
}

export default MetricCard
