import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [isFinePointer] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  )

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const ringX = useSpring(mouseX, { stiffness: 320, damping: 26, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 26, mass: 0.5 })

  useEffect(() => {
    if (!isFinePointer) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)

      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, input, textarea, [data-magnetic="true"], .interactive-card'
      )
      setHovered(Boolean(interactive))
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [isFinePointer, mouseX, mouseY, visible])

  if (!isFinePointer) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.6 : hovered ? 1.5 : 1,
        }}
      />
      <motion.div
        className={`cursor-ring ${hovered ? 'cursor-ring--hover' : ''}`}
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.82 : hovered ? 1.48 : 1,
        }}
      />
    </>
  )
}
