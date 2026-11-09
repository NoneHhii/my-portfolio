import React, { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Compass, Flame, GitCommit, GraduationCap, Sparkles } from 'lucide-react'
import { PROFILE } from '../data/profile'
import { SpotlightCard } from './SpotlightCard'

const MATRIX_COLS = 22
const MATRIX_ROWS = 5

export const AboutSection: React.FC = () => {
  const [pulseCenter, setPulseCenter] = useState<{ r: number; c: number; tick: number } | null>(
    null
  )

  const baseGrid = useMemo(() => {
    return Array.from({ length: MATRIX_ROWS }, (_, r) =>
      Array.from({ length: MATRIX_COLS }, (_, c) => {
        const val = Math.sin(c * 0.85 + r * 1.7) + Math.cos(c * 0.4 - r * 0.9)
        if (val > 1.15) return 3
        if (val > 0.35) return 2
        if (val > -0.45) return 1
        return 0
      })
    )
  }, [])

  return (
    <section id="about" className="section about-section">
      <div className="section-watermark" aria-hidden="true">
        IDENTITY // CREATIVE FREEDOM
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">01 // ABOUT ME</span>
          <h2 className="section-title">
            Bản sắc cá nhân &amp;{' '}
            <span className="gradient-text">Tự do Sáng tạo</span>
          </h2>
          <p className="section-subtitle">
            Sự giao thoa giữa kỷ luật Kỹ thuật Phần mềm và tinh thần nghệ thuật phóng khoáng.
          </p>
        </motion.div>

        <div className="about-bento">
          {/* Card 1: Manifesto — Tự do & Đổi mới sáng tạo */}
          <motion.div
            className="about-bento__manifesto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard accent="magenta" className="h-full">
              <div className="manifesto-badge">
                <Flame size={15} className="text-magenta" />
                <span>TRIẾT LÝ LÀM VIỆC CỐT LÕI</span>
              </div>

              <h3 className="manifesto-headline">{PROFILE.philosophy.headline}</h3>
              <p className="manifesto-body">{PROFILE.philosophy.manifesto}</p>

              <div className="manifesto-pillars">
                {PROFILE.philosophy.pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.code}
                    className="pillar-item"
                    whileHover={{ y: -4, borderColor: 'rgba(255, 45, 149, 0.5)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <span className="pillar-item__code">{pillar.code}</span>
                    <h4 className="pillar-item__title">{pillar.title}</h4>
                    <p className="pillar-item__desc">{pillar.desc}</p>
                    <span
                      className={`pillar-item__bar ${
                        idx % 2 === 0 ? 'bg-cerulean' : 'bg-magenta'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Developer Profile Code Block (NoneHhii / about.tsx) */}
          <motion.div
            className="about-bento__persona"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <SpotlightCard accent="cerulean" tilt className="h-full">
              <div className="readme-bar">
                <span className="readme-bar__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="readme-bar__path">
                  {PROFILE.githubUser} / <strong>about.tsx</strong>
                </span>
              </div>

              <div className="persona-avatar-row">
                <div className="persona-avatar-frame">
                  <img src={PROFILE.portrait} alt={PROFILE.fullName} />
                </div>
                <div>
                  <h3 className="persona-name">{PROFILE.fullName}</h3>
                  <p className="persona-handle">@{PROFILE.handle} • Creative Dev</p>
                </div>
              </div>

              <div className="persona-code-editor">
                <div className="code-line">
                  <span className="code-ln">01</span>
                  <span>
                    <span className="code-kw">export const</span> developer = &#123;
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">02</span>
                  <span>
                    &nbsp;&nbsp;name: <span className="code-str">'Thiên Khoa'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">03</span>
                  <span>
                    &nbsp;&nbsp;alias: <span className="code-str">'Jiikayss'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">04</span>
                  <span>
                    &nbsp;&nbsp;school: <span className="code-str">'Đại học Công nghiệp (IUH)'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">05</span>
                  <span>
                    &nbsp;&nbsp;major: <span className="code-str">'Software Engineering'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">06</span>
                  <span>
                    &nbsp;&nbsp;craft: [<span className="code-str">'Web Motion'</span>,{' '}
                    <span className="code-str">'React'</span>,{' '}
                    <span className="code-str">'Flutter'</span>],
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">07</span>
                  <span>
                    &nbsp;&nbsp;values: <span className="code-pink">'Tự do • Đổi mới • Sáng tạo'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">08</span>
                  <span>
                    &nbsp;&nbsp;create: () =&gt; <span className="code-pink">'Giao diện độc bản &amp; có hồn'</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-ln">09</span>
                  <span>&#125;;</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Trường Đại học Công nghiệp (IUH) */}
          <motion.div
            className="about-bento__edu"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.16, duration: 0.6 }}
          >
            <SpotlightCard accent="cerulean" className="h-full">
              <div className="edu-top">
                <div className="edu-icon-box">
                  <GraduationCap size={24} />
                </div>
                <span className="edu-period">{PROFILE.university.period}</span>
              </div>

              <span className="edu-label">HỌC VẤN &amp; CHUYÊN NGÀNH</span>
              <h3 className="edu-school">{PROFILE.university.name}</h3>
              <p className="edu-major">{PROFILE.university.major}</p>
              <p className="edu-desc">{PROFILE.university.description}</p>

              <div className="edu-tags">
                <span>OOP &amp; Clean Code</span>
                <span>Web &amp; Mobile Dev</span>
                <span>Interactive UI</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: GitHub-Inspired Contribution Matrix */}
          <motion.div
            className="about-bento__matrix"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.22, duration: 0.6 }}
          >
            <SpotlightCard accent="dual" className="h-full">
              <div className="matrix-header">
                <div className="matrix-title-group">
                  <GitCommit size={18} className="text-magenta" />
                  <h4>Contribution Pulse</h4>
                </div>
                <a
                  href={PROFILE.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="matrix-hint"
                >
                  <Compass size={14} /> @{PROFILE.githubUser}
                </a>
              </div>

              <div
                className="commit-matrix"
                role="img"
                aria-label="Biểu đồ hoạt động lấy cảm hứng từ GitHub"
              >
                {baseGrid.map((row, rIdx) => (
                  <div key={rIdx} className="commit-matrix__row">
                    {row.map((level, cIdx) => {
                      const dist = pulseCenter
                        ? Math.hypot(rIdx - pulseCenter.r, cIdx - pulseCenter.c)
                        : 999
                      const isRipple = dist < 3.6
                      return (
                        <motion.button
                          key={`${rIdx}-${cIdx}`}
                          type="button"
                          tabIndex={-1}
                          onMouseEnter={() =>
                            setPulseCenter((prev) => ({
                              r: rIdx,
                              c: cIdx,
                              tick: (prev?.tick ?? 0) + 1,
                            }))
                          }
                          onClick={() =>
                            setPulseCenter((prev) => ({
                              r: rIdx,
                              c: cIdx,
                              tick: (prev?.tick ?? 0) + 1,
                            }))
                          }
                          animate={{
                            scale: dist < 1.2 ? 1.35 : isRipple ? 1.15 : 1,
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                          className={`commit-cell level-${level} ${
                            dist < 1.5
                              ? 'is-epicenter'
                              : isRipple
                                ? 'is-ripple'
                                : ''
                          }`}
                          aria-label={`Cell ${rIdx}-${cIdx}`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              <div className="matrix-footer">
                <span className="matrix-stat">
                  <Sparkles size={13} className="text-magenta" /> 21+ Public Repositories trên GitHub
                </span>
                <div className="matrix-legend">
                  <span>Less</span>
                  <i className="level-0" />
                  <i className="level-1" />
                  <i className="level-2" />
                  <i className="level-3" />
                  <span>More</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
