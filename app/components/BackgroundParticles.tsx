'use client'
import { useEffect, useRef } from 'react'

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Very few particles — light on CPU
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.05,
    }))

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach(d => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,170,${d.opacity})`
        ctx.fill()
      })

      // Draw lines between close dots
      dots.forEach((d1, i) => {
        dots.slice(i + 1).forEach(d2 => {
          const dx = d1.x - d2.x
          const dy = d1.y - d2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(d1.x, d1.y)
            ctx.lineTo(d2.x, d2.y)
            ctx.strokeStyle = `rgba(0,212,170,${0.05 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.4,
      }}
    />
  )
}
