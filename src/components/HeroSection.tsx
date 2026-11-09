import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, ChevronDown, Mail, Terminal } from 'lucide-react'
import { PROFILE } from '../data/profile'
import { HolographicBadge } from './HolographicBadge'
import { MagneticDisplayTitle, ScrambleText } from './KineticText'
import { FacebookMarkIcon, GitHubMarkIcon } from './TechIcons'
import type { SectionId } from './Navbar'

interface HeroSectionProps {
  onNavigate: (id: SectionId) => void
}

const MagneticButton: React.FC<{
  children: React.ReactNode
  className?: string
  onClick?: () => void
}> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.28
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.28
    setOffset({ x, y })
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      data-magnetic="true"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 280, damping: 18, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % PROFILE.roles.length)
    }, 3200)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-layout">
        {/* Left: Kinetic Typography & General Intro */}
        <div className="hero-content">
          <motion.div
            className="status-capsule"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="status-capsule__dot" />
            <span className="status-capsule__mono">OPEN TO CREATIVE WORK</span>
            <span className="status-capsule__sep">//</span>
            <span className="status-capsule__sub">@{PROFILE.githubUser}</span>
          </motion.div>

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            {PROFILE.heroGreeting}
          </motion.p>

          <h1 className="hero-title">
            <MagneticDisplayTitle text={PROFILE.handle} />
            <motion.span
              className="hero-title__vn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
            >
              ({PROFILE.fullName})
            </motion.span>
          </h1>

          {/* Dynamic Scramble Role Line */}
          <motion.div
            className="hero-role-bar"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
          >
            <Terminal size={17} className="hero-role-bar__icon" />
            <ScrambleText text={PROFILE.roles[roleIdx]} className="hero-role-bar__text" />
            <span className="hero-role-bar__cursor" aria-hidden="true" />
          </motion.div>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
          >
            {PROFILE.heroSummary}
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
          >
            <MagneticButton
              className="btn-primary-kinetic"
              onClick={() => onNavigate('portfolio')}
            >
              <span>Xem Dự Án &amp; Kỹ Năng</span>
              <ArrowUpRight size={18} />
            </MagneticButton>

            <MagneticButton
              className="btn-secondary-glass"
              onClick={() => onNavigate('contact')}
            >
              <span>Kết Nối Ngay</span>
            </MagneticButton>
          </motion.div>

          {/* Clean Social Quick Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55 }}
          >
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <GitHubMarkIcon size={18} />
            </a>
            <a
              href={PROFILE.contacts.facebook}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="Facebook"
            >
              <FacebookMarkIcon size={18} />
            </a>
            <a
              href={`mailto:${PROFILE.contacts.email}`}
              className="social-icon-btn"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: 3D Parallax Orbital Portrait Showcase */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <HolographicBadge />
        </motion.div>
      </div>

      {/* Minimal Scroll Arrow */}
      <motion.button
        type="button"
        onClick={() => onNavigate('about')}
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.6 },
          y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
        }}
        aria-label="Xuống phần giới thiệu"
      >
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
