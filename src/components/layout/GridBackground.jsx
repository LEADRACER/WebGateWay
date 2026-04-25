import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme' // Changed from '../styles/theme' to '../../styles/theme'

export const GridBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId = null
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw main grid with darker grey
      ctx.strokeStyle = 'rgba(77, 77, 77, 0.3)' // Using grey600 from theme
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

      // Draw animated scan line with darker cyan
      const scanY = (time * 0.5) % canvas.height
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(0.5, 'rgba(0, 180, 160, 0.2)') // Using accentCyan with lower opacity
      gradient.addColorStop(1, 'transparent')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(canvas.width, scanY)
      ctx.stroke()

      // Draw particles with darker colors
      const particleCount = 30
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.01 + i * 0.5) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.01 + i * 0.3) * 0.5 + 0.5) * canvas.height
        const radius = Math.sin(time * 0.02 + i) * 1 + 1.5

        ctx.beginPath()
        ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 180, 160, 0.15)' // Using accentCyan with lower opacity
        ctx.fill()
      }

      time++
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) cancelAnimationFrame(animationId)
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
`