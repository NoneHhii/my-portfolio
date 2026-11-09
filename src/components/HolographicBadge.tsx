import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { PROFILE } from '../data/profile'
import { TechLogo } from './TechIcons'

export const HolographicBadge: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 200, damping: 24, mass: 0.6 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [11, -11])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-13, 13])

  // Parallax shifts for floating depth chips
  const chip1X = useTransform(smoothX, [-0.5, 0.5], [-14, 14])
  const chip1Y = useTransform(smoothY, [-0.5, 0.5], [-12, 12])
  const chip2X = useTransform(smoothX, [-0.5, 0.5], [16, -16])
  const chip2Y = useTransform(smoothY, [-0.5, 0.5], [10, -10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(nx)
    mouseY.set(ny)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="portrait-stage"
    >
      {/* Ambient Dual Aura & Orbital Rings */}
      <div className="portrait-stage__aura" aria-hidden="true" />
      <div className="portrait-stage__orbit portrait-stage__orbit--1" aria-hidden="true" />
      <div className="portrait-stage__orbit portrait-stage__orbit--2" aria-hidden="true" />

      {/* 3D Tilt Portrait Frame */}
      <motion.div
        className="portrait-frame-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {/* Rotating Conic Border Beam */}
        <div className="portrait-frame__beam" aria-hidden="true" />

        <div className="portrait-frame__inner">
          <div className="portrait-frame__photo-box">
            <img
              src={PROFILE.portrait}
              alt={`${PROFILE.fullName} (${PROFILE.handle})`}
              className="portrait-frame__img"
              draggable={false}
            />
            <div className="portrait-frame__vignette" aria-hidden="true" />
          </div>

          {/* Minimalist Frosted Identity Footer */}
          <div className="portrait-frame__plate">
            <div>
              <div className="portrait-frame__name">{PROFILE.fullName}</div>
              <div className="portrait-frame__role">@{PROFILE.handle} • IUH Software Eng</div>
            </div>
            <div className="portrait-frame__wave" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* Floating 3D Depth Tech Badges */}
        <motion.div
          className="floating-tech-chip floating-tech-chip--top"
          style={{ x: chip1X, y: chip1Y, translateZ: 42 }}
        >
          <TechLogo id="react" className="floating-tech-chip__icon" />
          <span>React &amp; Motion</span>
        </motion.div>

        <motion.div
          className="floating-tech-chip floating-tech-chip--bottom"
          style={{ x: chip2X, y: chip2Y, translateZ: 46 }}
        >
          <TechLogo id="flutter" className="floating-tech-chip__icon" />
          <span>Flutter UI</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
