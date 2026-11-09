import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Code2, Cpu, ExternalLink, FolderGit2, GitBranch, Sparkles } from 'lucide-react'
import { PROFILE, PROJECTS, TECH_SKILLS, type ProjectItem, type TechSkill } from '../data/profile'
import { SpotlightCard } from './SpotlightCard'
import { TechLogo } from './TechIcons'

type SkillFilter = 'all' | TechSkill['category']
type ProjectFilter = 'all' | ProjectItem['category']

interface LiveRepo {
  id: number
  name: string
  html_url: string
  language: string | null
  updated_at: string
}

const ProjectKineticPreview: React.FC<{ type: ProjectItem['visualType'] }> = ({ type }) => {
  return (
    <div className={`proj-preview proj-preview--${type}`} aria-hidden="true">
      <div className="proj-preview__grid" />
      {type === 'wave' && (
        <svg viewBox="0 0 320 120" className="proj-preview__svg">
          <path
            className="anim-wave-1"
            d="M0 70 Q 45 20, 90 70 T 180 70 T 270 70 T 360 70"
            fill="none"
            stroke="#FF2D95"
            strokeWidth="2.5"
          />
          <path
            className="anim-wave-2"
            d="M0 55 Q 55 100, 110 55 T 220 55 T 330 55"
            fill="none"
            stroke="#007BA7"
            strokeWidth="2.2"
          />
        </svg>
      )}
      {type === 'orbit' && (
        <div className="proj-orbit">
          <span className="proj-orbit__ring proj-orbit__ring--1" />
          <span className="proj-orbit__ring proj-orbit__ring--2" />
          <span className="proj-orbit__core" />
        </div>
      )}
      {type === 'grid' && (
        <div className="proj-iso-bars">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.14}s` }} />
          ))}
        </div>
      )}
      {type === 'pulse' && (
        <div className="proj-pulse-rings">
          <span />
          <span />
          <span />
        </div>
      )}
      {type === 'nodes' && (
        <svg viewBox="0 0 320 120" className="proj-preview__svg">
          <line x1="65" y1="60" x2="160" y2="32" stroke="#007BA7" strokeWidth="1.8" />
          <line x1="65" y1="60" x2="160" y2="88" stroke="#FF2D95" strokeWidth="1.8" />
          <line x1="160" y1="32" x2="255" y2="60" stroke="#FF2D95" strokeWidth="1.8" />
          <line x1="160" y1="88" x2="255" y2="60" stroke="#007BA7" strokeWidth="1.8" />
          <circle cx="65" cy="60" r="7" fill="#007BA7" className="node-blink" />
          <circle cx="160" cy="32" r="6" fill="#FF2D95" className="node-blink" />
          <circle cx="160" cy="88" r="6" fill="#00B4F0" className="node-blink" />
          <circle cx="255" cy="60" r="8" fill="#FF2D95" className="node-blink" />
        </svg>
      )}
      {type === 'matrix' && (
        <div className="proj-matrix-blocks">
          {Array.from({ length: 12 }).map((_, i) => (
            <i key={i} style={{ animationDelay: `${(i % 5) * 0.22}s` }} />
          ))}
        </div>
      )}
    </div>
  )
}

export const PortfolioSection: React.FC = () => {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>('all')
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all')
  const [liveRepos, setLiveRepos] = useState<LiveRepo[]>([])

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.github.com/users/${PROFILE.githubUser}/repos?sort=updated&per_page=6`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!cancelled && Array.isArray(data)) {
          setLiveRepos(
            data
              .filter((r: LiveRepo) => r.name.toLowerCase() !== PROFILE.githubUser.toLowerCase())
              .slice(0, 6)
          )
        }
      })
      .catch(() => {
        // Silent graceful fallback if offline
      })
    return () => {
      cancelled = true
    }
  }, [])

  const filteredSkills =
    skillFilter === 'all'
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === skillFilter)

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilter)

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-watermark" aria-hidden="true">
        STACK // MOTION // WORKS
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">02 // PORTFOLIO &amp; ARSENAL</span>
          <h2 className="section-title">
            Ngôn ngữ, Framework &amp;{' '}
            <span className="gradient-text">Dự Án Tiêu Biểu</span>
          </h2>
          <p className="section-subtitle">
            Bộ công cụ kỹ thuật kết hợp hiệu ứng chuyển động tương tác để biến ý tưởng táo bạo thành sản phẩm thực tế.
          </p>
        </motion.div>

        {/* Infinite Kinetic Logo Marquee Ribbon */}
        <div className="tech-marquee" aria-hidden="true">
          <div className="tech-marquee__track">
            {[...TECH_SKILLS, ...TECH_SKILLS].map((skill, idx) => (
              <div key={`${skill.id}-${idx}`} className="tech-marquee__pill">
                <TechLogo id={skill.id} className="marquee-logo" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION A: LANGUAGES, FRAMEWORKS & TOOLS WITH LOGOS */}
        <div className="portfolio-block">
          <div className="block-toolbar">
            <div className="block-toolbar__title">
              <Cpu size={19} className="text-cerulean" />
              <h3>Ngôn Ngữ &amp; Framework Chủ Lực</h3>
            </div>

            <div className="filter-pills" role="tablist" aria-label="Bộ lọc kỹ năng">
              {(
                [
                  { id: 'all', label: 'Tất cả' },
                  { id: 'language', label: 'Ngôn ngữ' },
                  { id: 'framework', label: 'Framework & Motion' },
                  { id: 'tool', label: 'Công cụ' },
                ] as { id: SkillFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={skillFilter === tab.id}
                  onClick={() => setSkillFilter(tab.id)}
                  className={`filter-pill ${skillFilter === tab.id ? 'is-active' : ''}`}
                >
                  {skillFilter === tab.id && (
                    <motion.span
                      layoutId="skillFilterActive"
                      className="filter-pill__bg"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    />
                  )}
                  <span className="filter-pill__text">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="skills-grid">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <SpotlightCard
                    accent={skill.accent}
                    tilt
                    className="skill-card"
                  >
                    <div className="skill-card__top">
                      <div className="skill-card__logo-box">
                        <TechLogo id={skill.id} />
                      </div>
                      <span className={`skill-card__cat is-${skill.accent}`}>
                        {skill.category === 'language'
                          ? 'LANGUAGE'
                          : skill.category === 'framework'
                            ? 'FRAMEWORK'
                            : 'TOOLING'}
                      </span>
                    </div>

                    <h4 className="skill-card__name">{skill.name}</h4>
                    <p className="skill-card__tagline">{skill.tagline}</p>

                    <div className="skill-card__meter">
                      <div className="skill-card__meter-head">
                        <span>Mức độ làm chủ</span>
                        <strong>{skill.level}%</strong>
                      </div>
                      <div className="skill-card__meter-track">
                        <motion.div
                          className={`skill-card__meter-fill is-${skill.accent}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* SUBSECTION B: FEATURED PROJECTS SHOWCASE */}
        <div className="portfolio-block projects-block">
          <div className="block-toolbar">
            <div className="block-toolbar__title">
              <Code2 size={19} className="text-magenta" />
              <h3>Dự Án Sáng Tạo &amp; Thực Chiến</h3>
            </div>

            <div className="filter-pills" role="tablist" aria-label="Bộ lọc dự án">
              {(
                [
                  { id: 'all', label: 'Tất cả' },
                  { id: 'web-motion', label: 'Web & Animation' },
                  { id: 'mobile', label: 'Mobile App' },
                  { id: 'fullstack', label: 'Fullstack' },
                ] as { id: ProjectFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={projectFilter === tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`filter-pill ${projectFilter === tab.id ? 'is-active' : ''}`}
                >
                  {projectFilter === tab.id && (
                    <motion.span
                      layoutId="projFilterActive"
                      className="filter-pill__bg"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    />
                  )}
                  <span className="filter-pill__text">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                  }}
                >
                  <SpotlightCard
                    accent={index % 2 === 0 ? 'magenta' : 'cerulean'}
                    tilt
                    className="project-card"
                  >
                    <ProjectKineticPreview type={project.visualType} />

                    <div className="project-card__body">
                      <div className="project-card__meta">
                        <span className="project-card__year">{project.year}</span>
                        {project.featured && (
                          <span className="project-card__featured">
                            <Sparkles size={12} /> FEATURED
                          </span>
                        )}
                      </div>

                      <h4 className="project-card__title">{project.title}</h4>
                      <p className="project-card__subtitle">{project.subtitle}</p>
                      <p className="project-card__desc">{project.description}</p>

                      <div className="project-card__tags">
                        {project.tech.map((t) => (
                          <span key={t} className="project-tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="project-card__footer">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <FolderGit2 size={15} />
                          <span>Mã nguồn GitHub</span>
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Live Synced Repositories Strip from GitHub @NoneHhii */}
          {liveRepos.length > 0 && (
            <motion.div
              className="live-github-strip"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="live-github-strip__head">
                <div className="live-github-strip__title">
                  <GitBranch size={16} className="text-cerulean" />
                  <span>Cập nhật trực tiếp từ GitHub @{PROFILE.githubUser}</span>
                </div>
                <a
                  href={PROFILE.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="live-github-strip__all"
                >
                  Xem toàn bộ 21+ repos <ExternalLink size={13} />
                </a>
              </div>

              <div className="live-github-strip__list">
                {liveRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="live-repo-chip"
                  >
                    <span className="live-repo-chip__name">{repo.name}</span>
                    {repo.language && (
                      <span className="live-repo-chip__lang">{repo.language}</span>
                    )}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

