import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*<>+='

interface ScrambleTextProps {
  text: string
  className?: string
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '' }) => {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    let iteration = 0
    const timer = window.setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      )
      iteration += 0.55
      if (iteration >= text.length) {
        window.clearInterval(timer)
        setDisplay(text)
      }
    }, 28)

    return () => window.clearInterval(timer)
  }, [text])

  return <span className={className}>{display}</span>
}

interface MagneticDisplayTitleProps {
  text: string
  className?: string
}

export const MagneticDisplayTitle: React.FC<MagneticDisplayTitleProps> = ({
  text,
  className = '',
}) => {
  return (
    <span className={`magnetic-title ${className}`} aria-label={text}>
      {text.split('').map((char, idx) => (
        <motion.span
          key={`${char}-${idx}`}
          className="magnetic-letter"
          initial={{ opacity: 0, y: 36, rotateX: -65 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.12 + idx * 0.045,
            type: 'spring',
            stiffness: 260,
            damping: 18,
          }}
          whileHover={{
            y: -10,
            scale: 1.14,
            rotateZ: idx % 2 === 0 ? -4 : 4,
            color: idx % 2 === 0 ? '#FF2D95' : '#00B4F0',
            textShadow:
              idx % 2 === 0
                ? '0 0 24px rgba(255, 45, 149, 0.7)'
                : '0 0 24px rgba(0, 123, 167, 0.85)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

