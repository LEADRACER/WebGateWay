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

      // Draw main grid with accent blue
      ctx.strokeStyle = 'rgba(107, 140, 174, 0.15)'
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
      const scanY = (time * 0.5) % canvas.height
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(0.5, 'rgba(0, 212, 170, 0.25)')
      gradient.addColorStop(1, 'transparent')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(canvas.width, scanY)
      ctx.stroke()

      // Draw particles with cyan glow
      const particleCount = 30
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.01 + i * 0.5) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.01 + i * 0.3) * 0.5 + 0.5) * canvas.height
        const radius = Math.sin(time * 0.02 + i) * 1 + 1.5

        ctx.beginPath()
        ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 212, 170, 0.2)'
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