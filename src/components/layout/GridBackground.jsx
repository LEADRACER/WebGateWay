import { useEffect, useRef } from 'react'
import styled from 'styled-components'

export const GridBackground = () => {
  const canvasRef = useRef(null)
  const requestRef = useRef(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let resizeTimeout

    const resize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }, 150)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw main grid with accent blue
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)'
      ctx.lineWidth = 1
      const gridSize = 60

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw animated scan line with bright cyan glow
      const scanY = (timeRef.current * 0.5) % canvas.height
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.2)')
      gradient.addColorStop(1, 'transparent')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(canvas.width, scanY)
      ctx.stroke()

      // Draw fewer particles for better performance (30 → 15)
      const particleCount = 15
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(timeRef.current * 0.01 + i * 0.5) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(timeRef.current * 0.01 + i * 0.3) * 0.5 + 0.5) * canvas.height
        const radius = Math.sin(timeRef.current * 0.02 + i) * 1 + 1.5

        ctx.beginPath()
        ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 212, 255, 0.18)'
        ctx.fill()
      }

      timeRef.current++
      requestRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(requestRef.current)
      } else {
        draw()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('resize', resize)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('resize', resize)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return <Canvas ref={canvasRef} />
}

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
  will-change: contents;
`
