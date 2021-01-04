import React, { useEffect, useRef } from 'react'

import './canvas.scss'

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d')

    if (context) {
      context.fillStyle = '#ff7f50'
      context.fillRect(100, 100, 60, 60)
    }
  }, [])

  return (
    <canvas className="canvas" ref={canvasRef} width="1800" height="1800" />
  )
}

export default Canvas
