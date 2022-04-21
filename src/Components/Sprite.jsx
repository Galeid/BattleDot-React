import React, { useEffect, useState } from 'react'
import { string, object, objectOf, arrayOf, number } from 'prop-types';

const Sprite = ({
  filename = '',
  animations = { default: [1] },
  initialAnim = 'default',
  height,
  width,
  columns = 1,
  rows = 1,
  fps = 24,
  playRef,
}) => {

  const [currentAnimation, setCurrentAnimation] = useState([])
  const [currentInterval, setCurrentInterval] = useState(0)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    playRef.current = playAnimation
    initialAnim === 'default' ?
      playAnimation('default') : playAnimation(initialAnim)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentAnimation.length <= 0) return
    let cont = 0
    let intervalId = setInterval(() => {
      if (cont === currentAnimation.length) cont = 0
      getFrameCoords(currentAnimation[cont])
      cont++
    }, 1000 / fps)
    setCurrentInterval(intervalId)
    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line
  }, [currentAnimation])

  const file = require(`./../Assets/${filename}`)
  const dimensions = {
    height: height / rows,
    width: width / columns
  }

  const styles = {
    backgroundImage: `url(${file})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: posX * -1,
    backgroundPositionY: posY * -1,
    height: dimensions.height,
    width: dimensions.width,
  }

  const playAnimation = ( animName ) => {
    clearInterval(currentInterval)
    setCurrentAnimation( animations[animName] )
    console.log(`Playing '${animName}' animation`)
  }

  const getFrameCoords = ( position = 1 ) => {
    let currentPos = position - 1
    let currentCol = currentPos % columns
    let currentRow = (( currentPos - currentCol ) / columns )
    setPosX( currentCol * dimensions.width )
    setPosY( currentRow * dimensions.height )
  }

  return (
    <div style={styles} />
  )
}

Sprite.propTypes = {
  filename: string.isRequired,
  animations: objectOf(arrayOf(number)),
  initialAnim: string,
  height: number.isRequired,
  width: number.isRequired,
  columns: number,
  rows: number,
  fps: number,
  playRef: object.isRequired,
}

export default Sprite
