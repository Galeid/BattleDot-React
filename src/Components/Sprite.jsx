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
  const [coordX, setCoordX] = useState(0)
  const [coordY, setCoordY] = useState(0)

  useEffect(() => {
    playRef.current = playAnimation
    initialAnim === 'default'
      ? playAnimation('default')
      : playAnimation(initialAnim)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentAnimation.length <= 0) return

    if (currentAnimation.length === 1) {
      setSpriteCoords(currentAnimation[0])
      return
    }

    let cont = 0
    let intervalId = setInterval(() => {
      if (cont === currentAnimation.length) cont = 0
      setSpriteCoords(currentAnimation[cont])
      cont++
    }, 1000 / fps)
    setCurrentInterval(intervalId)

    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line
  }, [currentAnimation])

  const FILE = require(`./../Assets/${filename}`)
  const DIMENSIONS = {
    height: height / rows,
    width: width / columns
  }
  const STYLES = {
    backgroundImage: `url(${FILE})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: coordX * -1,
    backgroundPositionY: coordY * -1,
    height: DIMENSIONS.height,
    width: DIMENSIONS.width,
  }

  const playAnimation = ( animName ) => {
    clearInterval(currentInterval)
    animName === 'default'
      ? setCurrentAnimation([1])
      : setCurrentAnimation( animations[animName] )
    console.log(`Playing '${animName}' animation`)
  }

  const setSpriteCoords = ( position = 1 ) => {
    let currentPos = position - 1
    let currentCol = currentPos % columns
    let currentRow = ((currentPos - currentCol) / columns)
    setCoordX(currentCol * DIMENSIONS.width)
    setCoordY(currentRow * DIMENSIONS.height)
  }

  return (
    <div style={STYLES} />
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
