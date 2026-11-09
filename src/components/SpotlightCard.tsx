import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  accent?: 'cerulean' | 'magenta' | 'dual'
  tilt?: boolean
  onClick?: () => void
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  accent = 'dual',
  tilt = false,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [coords, setCoords] = useState({ x: 50, y: 50, active: false })
  const [rot, setRot] = useState({ rx: 0, ry: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({ x, y, active: true })

    if (tilt) {
      const nx = x / rect.width - 0.5
      const ny = y / rect.height - 0.5
      setRot({ rx: -ny * 9, ry: nx * 9 })
    }
  }

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, active: false }))
    if (tilt) setRot({ rx: 0, ry: 0 })
  }

  const glowColor =
    accent === 'magenta'
      ? 'rgba(255, 45, 149, 0.22)'
      : accent === 'cerulean'
        ? 'rgba(0, 123, 167, 0.26)'
        : 'rgba(0, 123, 167, 0.22)'

  const borderGlow =
    accent === 'magenta'
      ? 'rgba(255, 45, 149, 0.7)'
      : accent === 'cerulean'
        ? 'rgba(0, 168, 224, 0.7)'
        : 'rgba(255, 45, 149, 0.65)'

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        tilt
          ? {
              rotateX: rot.rx,
              rotateY: rot.ry,
              transformPerspective: 950,
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`spotlight-card interactive-card ${className}`}
      style={
        {
          '--spot-x': `${coords.x}px`,
          '--spot-y': `${coords.y}px`,
          '--spot-opacity': coords.active ? 1 : 0,
          '--spot-glow': glowColor,
          '--spot-border': borderGlow,
        } as React.CSSProperties
      }
    >
      <div className="spotlight-card__glow" aria-hidden="true" />
      <div className="spotlight-card__border" aria-hidden="true" />
      <div className="spotlight-card__inner">{children}</div>
    </motion.div>
  )
}

