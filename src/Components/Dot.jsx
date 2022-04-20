import React from 'react'

const Dot = () => {
  const dot02 = require('./../Assets/dot02.png')

  const styles = {
    backgroundImage: `url(${dot02})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    width: 180,
    height: 180,
  }

  return (
    <div style={styles}>
    </div>
  )
}

export default Dot
