import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { CustomCursor } from './components/CustomCursor'
import { HeroSection } from './components/HeroSection'
import { KineticCanvas, type CanvasMode } from './components/KineticCanvas'
import { Navbar, type SectionId } from './components/Navbar'
import { PortfolioSection } from './components/PortfolioSection'

const CANVAS_MODES: CanvasMode[] = ['constellation', 'flow', 'vortex']

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [canvasMode, setCanvasMode] = useState<CanvasMode>('constellation')

  useEffect(() => {
    const ids: SectionId[] = ['home', 'about', 'portfolio', 'contact']
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const cycleCanvasMode = () => {
    setCanvasMode((prev) => {
      const idx = CANVAS_MODES.indexOf(prev)
      return CANVAS_MODES[(idx + 1) % CANVAS_MODES.length]
    })
  }

  return (
    <div className="portfolio-shell">
      {/* Interactive 60FPS Particle & Physics Canvas */}
      <KineticCanvas mode={canvasMode} />

      {/* Subtle Architectural Noise & Vignette */}
      <div className="ambient-vignette" aria-hidden="true" />

      {/* Spring Custom Cursor */}
      <CustomCursor />

      {/* Floating Capsule Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        canvasMode={canvasMode}
        onCycleCanvasMode={cycleCanvasMode}
      />

      {/* 4 Core Sections: Home -> About -> Portfolio -> Contact */}
      <main className="portfolio-main">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <PortfolioSection />
        <ContactSection onNavigate={handleNavigate} />
      </main>
    </div>
  )
}

export default App
