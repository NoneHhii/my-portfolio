import React from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Sparkles } from 'lucide-react'
import type { CanvasMode } from './KineticCanvas'

export type SectionId = 'home' | 'about' | 'portfolio' | 'contact'

interface NavbarProps {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
  canvasMode: CanvasMode
  onCycleCanvasMode: () => void
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  canvasMode,
  onCycleCanvasMode,
}) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div className="scroll-laser" style={{ scaleX }} aria-hidden="true" />

      <header className="floating-nav-wrap">
        <motion.nav
          className="floating-nav"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Điều hướng chính"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="floating-nav__brand"
            aria-label="Về đầu trang"
          >
            <span className="brand-glyph">JK</span>
          </button>

          <div className="floating-nav__links">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`floating-nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavCapsule"
                      className="floating-nav__pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                  <span className="floating-nav__label">{item.label}</span>
                </button>
              )
            })}
          </div>

          <div className="floating-nav__divider" aria-hidden="true" />

          <button
            type="button"
            onClick={onCycleCanvasMode}
            className={`floating-nav__fx-icon-btn mode-${canvasMode}`}
            aria-label="Đổi hiệu ứng chuyển động nền"
          >
            <Sparkles size={15} />
          </button>
        </motion.nav>
      </header>
    </>
  )
}
