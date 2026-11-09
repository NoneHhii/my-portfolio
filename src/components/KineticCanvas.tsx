import React, { useEffect, useRef } from 'react'

export type CanvasMode = 'constellation' | 'flow' | 'vortex'

interface KineticCanvasProps {
  mode: CanvasMode
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  hueType: 'cerulean' | 'magenta'
  phase: number
}

interface Shockwave {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
}

export const KineticCanvas: React.FC<KineticCanvasProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const modeRef = useRef<CanvasMode>(mode)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animId = 0
    let tick = 0

    const pointer = { x: width * 0.5, y: height * 0.4, active: false, vx: 0, vy: 0 }
    const shockwaves: Shockwave[] = []

    const count = Math.min(82, Math.max(40, Math.floor((width * height) / 21000)))
    const particles: Particle[] = Array.from({ length: count }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.85,
      vy: (Math.random() - 0.5) * 0.85,
      size: Math.random() * 2 + 1,
      hueType: idx % 4 === 0 ? 'magenta' : 'cerulean',
      phase: Math.random() * Math.PI * 2,
    }))

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const onMouseMove = (e: MouseEvent) => {
      pointer.vx = e.clientX - pointer.x
      pointer.vy = e.clientY - pointer.y
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }

    const onMouseDown = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        maxRadius: 280,
        alpha: 0.85,
      })

      for (const p of particles) {
        const dx = p.x - e.clientX
        const dy = p.y - e.clientY
        const dist = Math.hypot(dx, dy) || 1
        if (dist < 260) {
          const force = ((260 - dist) / 260) * 6.5
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })

    const render = () => {
      tick += 0.012
      const activeMode = modeRef.current

      if (activeMode === 'flow') {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.18)'
        ctx.fillRect(0, 0, width, height)
      } else {
        ctx.clearRect(0, 0, width, height)
      }

      // Subtle ambient dual-nebula glow anchored to palette
      const gradCerulean = ctx.createRadialGradient(
        width * 0.18,
        height * 0.22,
        10,
        width * 0.18,
        height * 0.22,
        width * 0.45
      )
      gradCerulean.addColorStop(0, 'rgba(0, 123, 167, 0.08)')
      gradCerulean.addColorStop(1, 'rgba(10, 10, 10, 0)')
      ctx.fillStyle = gradCerulean
      ctx.fillRect(0, 0, width, height)

      const gradMagenta = ctx.createRadialGradient(
        width * 0.82,
        height * 0.72,
        10,
        width * 0.82,
        height * 0.72,
        width * 0.42
      )
      gradMagenta.addColorStop(0, 'rgba(255, 45, 149, 0.065)')
      gradMagenta.addColorStop(1, 'rgba(10, 10, 10, 0)')
      ctx.fillStyle = gradMagenta
      ctx.fillRect(0, 0, width, height)

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (activeMode === 'flow') {
          const angle =
            Math.sin(p.x * 0.0032 + tick) * Math.cos(p.y * 0.0032 - tick * 0.7) * Math.PI * 2
          p.vx += Math.cos(angle) * 0.08
          p.vy += Math.sin(angle) * 0.08
          p.vx *= 0.94
          p.vy *= 0.94
        } else if (activeMode === 'vortex') {
          const cx = pointer.active ? pointer.x : width * 0.5
          const cy = pointer.active ? pointer.y : height * 0.5
          const dx = cx - p.x
          const dy = cy - p.y
          const dist = Math.hypot(dx, dy) || 1
          // Tangential swirl + gentle pull
          p.vx += (-dy / dist) * 0.12 + (dx / dist) * (dist > 140 ? 0.045 : -0.09)
          p.vy += (dx / dist) * 0.12 + (dy / dist) * (dist > 140 ? 0.045 : -0.09)
          p.vx *= 0.955
          p.vy *= 0.955
        } else {
          // Constellation physics
          if (pointer.active) {
            const dx = p.x - pointer.x
            const dy = p.y - pointer.y
            const dist = Math.hypot(dx, dy) || 1
            if (dist < 165) {
              const push = ((165 - dist) / 165) * 0.35
              p.vx += (dx / dist) * push + pointer.vx * 0.003
              p.vy += (dy / dist) * push + pointer.vy * 0.003
            }
          }
          // Gentle damping back to cruise speed
          const speed = Math.hypot(p.vx, p.vy)
          if (speed > 1.8) {
            p.vx *= 0.96
            p.vy *= 0.96
          } else if (speed < 0.25) {
            p.vx += Math.cos(tick + p.phase) * 0.02
            p.vy += Math.sin(tick + p.phase) * 0.02
          }
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        const pulse = 0.65 + 0.35 * Math.sin(tick * 2.5 + p.phase)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (0.85 + pulse * 0.35), 0, Math.PI * 2)
        ctx.fillStyle =
          p.hueType === 'magenta'
            ? `rgba(255, 45, 149, ${0.55 * pulse + 0.2})`
            : `rgba(0, 168, 224, ${0.5 * pulse + 0.2})`
        ctx.fill()

        // Connect constellation lines
        if (activeMode !== 'flow') {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const distSq = dx * dx + dy * dy
            if (distSq < 15500) {
              const alpha = (1 - distSq / 15500) * 0.26
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle =
                p.hueType === 'magenta' || p2.hueType === 'magenta'
                  ? `rgba(255, 45, 149, ${alpha * 0.85})`
                  : `rgba(0, 123, 167, ${alpha})`
              ctx.lineWidth = 0.85
              ctx.stroke()
            }
          }
        }
      }

      // Draw expanding click shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s]
        sw.radius += (sw.maxRadius - sw.radius) * 0.08 + 2.2
        sw.alpha *= 0.93

        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 45, 149, ${sw.alpha})`
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.radius * 0.72, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 123, 167, ${sw.alpha * 0.85})`
        ctx.lineWidth = 1.2
        ctx.stroke()

        if (sw.alpha < 0.02 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1)
        }
      }

      pointer.vx *= 0.85
      pointer.vy *= 0.85

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
    }
  }, [])

  return <canvas ref={canvasRef} className="kinetic-canvas" aria-hidden="true" />
}
