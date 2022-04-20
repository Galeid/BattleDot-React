import React from 'react'
import { string } from 'prop-types';

const ContentCard = ({
  title = 'Title',
  children
}) => {
  return (
    <div className="bg-white border rounded shadow">
      <div className="border-b p-3">
          <h5 className="font-bold uppercase text-gray-600">{title}</h5>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  )
}

ContentCard.propTypes = {
  title: string,
}

export default ContentCard
