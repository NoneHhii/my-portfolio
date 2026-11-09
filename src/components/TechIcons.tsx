import React from 'react'

interface IconProps {
  id: string
  className?: string
}

export const TechLogo: React.FC<IconProps> = ({ id, className = 'tech-svg-icon' }) => {
  switch (id) {
    case 'typescript':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#007ACC" />
          <path
            d="M27.2 24.4H22.4V38H18.4V24.4H13.6V21.1H27.2V24.4ZM29.4 36.7V33.1C30.6 33.9 32.2 34.5 33.9 34.5C35.8 34.5 36.8 33.7 36.8 32.5C36.8 31.3 35.8 30.8 33.6 29.9C30.4 28.6 29 27.2 29 24.7C29 22 31.3 20.1 35 20.1C36.6 20.1 38 20.4 39.1 20.9V24.3C38 23.7 36.6 23.3 35.2 23.3C33.5 23.3 32.6 24 32.6 25C32.6 26.1 33.4 26.6 35.8 27.6C39 28.9 40.5 30.4 40.5 32.9C40.5 35.9 38.1 37.9 34 37.9C32.1 37.9 30.5 37.4 29.4 36.7Z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'javascript':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="#F7DF1E" />
          <path
            d="M26.5 34.3C27.5 35.9 28.8 37.1 31.1 37.1C33 37.1 34.2 36.1 34.2 34.8C34.2 33.2 33 32.6 30.9 31.7L29.8 31.2C26.5 29.8 24.3 28.1 24.3 24.4C24.3 21 26.9 18.5 30.9 18.5C33.8 18.5 35.8 19.5 37.3 22.1L33.8 24.3C33 22.9 32.2 22.3 30.9 22.3C29.6 22.3 28.7 23.1 28.7 24.3C28.7 25.7 29.6 26.3 31.6 27.1L32.7 27.6C36.5 29.2 38.7 30.9 38.7 34.7C38.7 38.8 35.5 41 31.2 41C27 41 24.3 39 23 36.4L26.5 34.3ZM14.5 34.7C15.2 35.9 16 37 17.6 37C19.1 37 20.1 36.4 20.1 34V18.8H24.5V34.1C24.5 38.8 21.8 41 17.8 41C14.2 41 12.1 39.1 11 36.8L14.5 34.7Z"
            fill="#0A0A0A"
          />
        </svg>
      )

    case 'dart':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M13 13L21.5 4.5C23 3 25.5 3 27.5 4.5L41 18L34 34L13 34V13Z" fill="#01579B" />
          <path d="M13 13L34 34H42V20L28.5 6.5C26.8 4.8 24.2 4.8 22.5 6.5L13 13Z" fill="#40C4FF" />
          <path d="M13 13L4.5 21.5C3 23 3 25.5 4.5 27.5L18 41H34V34L13 13Z" fill="#29B6F6" />
          <path d="M18 34L24 42H41V34H18Z" fill="#007BA7" />
        </svg>
      )

    case 'cpp':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M24 3L42 13.5V34.5L24 45L6 34.5V13.5L24 3Z" fill="#00599C" />
          <path d="M24 3L42 13.5V34.5L24 24V3Z" fill="#007BA7" />
          <path
            d="M21.5 32.5C16.8 32.5 13 28.7 13 24C13 19.3 16.8 15.5 21.5 15.5C24.5 15.5 27.1 17 28.6 19.4L25.1 21.4C24.3 20.2 23 19.5 21.5 19.5C19 19.5 17 21.5 17 24C17 26.5 19 28.5 21.5 28.5C23 28.5 24.3 27.8 25.1 26.6L28.6 28.6C27.1 31 24.5 32.5 21.5 32.5Z"
            fill="#FFFFFF"
          />
          <path d="M31.5 21V23H29.5V25H31.5V27H33.5V25H35.5V23H33.5V21H31.5Z" fill="#FFFFFF" />
          <path d="M38 21V23H36.5V25H38V27H40V25H41.5V23H40V21H38Z" fill="#FF2D95" />
        </svg>
      )

    case 'java':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M26.5 6C29 9.5 23.5 13 21.5 16.5C19.5 20 23 23 23 23C20 20.5 20.5 17.2 22.8 14.5C25.5 11.5 26.5 6 26.5 6Z"
            fill="#FF2D95"
          />
          <path
            d="M31 12.5C31 12.5 26.5 16 28.5 20C30 23 27 25.5 27 25.5C31.5 24 33 20.5 31 17.5C29.5 15.2 31 12.5 31 12.5Z"
            fill="#FF6B9D"
          />
          <path
            d="M14 28.5C14 30.5 20 31.8 26 31C31 30.3 34 29 34 29C34 29 32.2 30.8 25.5 31.5C18.8 32.2 12 30.8 14 28.5Z"
            fill="#007BA7"
          />
          <path
            d="M15.5 33.5C15.5 35.2 21 36.2 26.5 35.6C31.5 35 33.5 33.8 33.5 33.8C33.5 33.8 31.8 35.6 25.8 36.2C19.5 36.8 13.5 35.5 15.5 33.5Z"
            fill="#38BDF8"
          />
          <path
            d="M12 39C16 41.8 29 42 35.5 38.8C35.5 38.8 33 41.2 24 41.5C15.5 41.8 10.5 39.8 12 39Z"
            fill="#FF2D95"
          />
          <path
            d="M34.5 28.5C37.2 28.5 39 30 39 32C39 34 37 35.5 34.2 35.5"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'react':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`${className} spin-slow-hover`} aria-hidden="true">
          <circle cx="24" cy="24" r="4.2" fill="#00D8FF" />
          <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="#00D8FF" strokeWidth="2.3" />
          <ellipse
            cx="24"
            cy="24"
            rx="19"
            ry="7.5"
            transform="rotate(60 24 24)"
            stroke="#007BA7"
            strokeWidth="2.3"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="19"
            ry="7.5"
            transform="rotate(120 24 24)"
            stroke="#FF2D95"
            strokeWidth="2.3"
          />
        </svg>
      )

    case 'flutter':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M27.5 5L9 23.5L14.8 29.3L39 5H27.5Z" fill="#47C5FB" />
          <path d="M27.3 22.2L17.4 32.1L23.2 38L39 22.2H27.3Z" fill="#007BA7" />
          <path d="M23.2 38L27.7 42.5H39L29 32.2L23.2 38Z" fill="#00569E" />
          <path d="M17.4 32.1L23.2 26.3L29 32.2L23.2 38L17.4 32.1Z" fill="#FF2D95" fillOpacity="0.85" />
        </svg>
      )

    case 'motion':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#12131A" stroke="url(#motionGrad)" strokeWidth="2.2" />
          <path
            d="M11 31C15 16 21 16 24 24C27 32 33 32 37 17"
            stroke="url(#motionGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="11" cy="31" r="3" fill="#007BA7" />
          <circle cx="37" cy="17" r="3.5" fill="#FF2D95" />
          <defs>
            <linearGradient id="motionGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#007BA7" />
              <stop offset="100%" stop-color="#FF2D95" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'nodejs':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M24 4L41 13.8V34.2L24 44L7 34.2V13.8L24 4Z" fill="#1B2A22" stroke="#539E43" strokeWidth="2.4" />
          <path
            d="M18 18V30L24 33.5L30 30V24L21 19"
            stroke="#6CC24A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'git':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect
            x="24"
            y="4"
            width="28.3"
            height="28.3"
            rx="5"
            transform="rotate(45 24 4)"
            fill="#F05032"
          />
          <path d="M19 13L29 23M24 18V31" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="24" cy="18" r="3" fill="#FFFFFF" />
          <circle cx="29" cy="23" r="3" fill="#FFFFFF" />
          <circle cx="24" cy="31" r="3" fill="#FFFFFF" />
        </svg>
      )

    case 'vite':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M41 9L24.5 42L7 9L24.5 14.5L41 9Z" fill="url(#viteA)" />
          <path d="M29 5L19 24.5H26.5L23.5 36L35 19H27L29 5Z" fill="#FF2D95" />
          <defs>
            <linearGradient id="viteA" x1="7" y1="9" x2="41" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#007BA7" />
              <stop offset="100%" stop-color="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'aseprite':
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#171923" stroke="#007BA7" strokeWidth="2.5" />
          <rect x="13" y="13" width="9" height="9" fill="#007BA7" />
          <rect x="26" y="13" width="9" height="9" fill="#FF2D95" />
          <rect x="13" y="26" width="9" height="9" fill="#FF2D95" fillOpacity="0.6" />
          <rect x="26" y="26" width="9" height="9" fill="#38BDF8" />
        </svg>
      )
  }
}

export const GitHubMarkIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.65 3.01 8.59 7.19 9.98.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.81-2.93.64-3.55-1.41-3.55-1.41-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.05.07 1.61 1.08 1.61 1.08.94 1.6 2.46 1.14 3.06.87.09-.68.37-1.14.67-1.4-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.89 1.08a10.02 10.02 0 0 1 5.26 0c2.01-1.36 2.89-1.08 2.89-1.08.57 1.46.21 2.53.1 2.8.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.93-4.81 5.19.38.33.72.97.72 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.19.61.73.51A10.51 10.51 0 0 0 22.5 12c0-5.8-4.7-10.5-10.5-10.5Z" />
  </svg>
)

export const FacebookMarkIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
