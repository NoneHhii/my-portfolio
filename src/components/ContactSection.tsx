import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, Phone, Send } from 'lucide-react'
import { PROFILE } from '../data/profile'
import { SpotlightCard } from './SpotlightCard'
import { FacebookMarkIcon, GitHubMarkIcon } from './TechIcons'
import type { SectionId } from './Navbar'

interface ContactSectionProps {
  onNavigate: (id: SectionId) => void
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard?.writeText(value)
    setCopiedKey(key)
    window.setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev))
    }, 2200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `[Portfolio Contact] Kết nối từ ${formState.name || 'Đối tác'}`
    )
    const body = encodeURIComponent(
      `Xin chào Jiikayss (${PROFILE.fullName}),\n\nTên: ${formState.name}\nEmail: ${formState.email}\n\nNội dung:\n${formState.message}`
    )
    window.open(`mailto:${PROFILE.contacts.email}?subject=${subject}&body=${body}`, '_self')
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  const contactItems = [
    {
      key: 'email',
      label: 'Email Trực Tiếp',
      value: PROFILE.contacts.email,
      href: `mailto:${PROFILE.contacts.email}`,
      actionText: 'Gửi Email',
      copyValue: PROFILE.contacts.email,
      accent: 'magenta' as const,
      icon: <Mail size={21} />,
    },
    {
      key: 'github',
      label: 'GitHub Profile',
      value: PROFILE.contacts.githubLabel,
      href: PROFILE.contacts.github,
      external: true,
      actionText: 'Mở GitHub',
      copyValue: PROFILE.contacts.github,
      accent: 'cerulean' as const,
      icon: <GitHubMarkIcon size={21} />,
    },
    {
      key: 'facebook',
      label: 'Facebook Cá Nhân',
      value: PROFILE.contacts.facebookLabel,
      href: PROFILE.contacts.facebook,
      external: true,
      actionText: 'Kết bạn / Nhắn tin',
      copyValue: PROFILE.contacts.facebook,
      accent: 'cerulean' as const,
      icon: <FacebookMarkIcon size={21} />,
    },
    {
      key: 'phone',
      label: 'Điện Thoại Liên Hệ',
      value: PROFILE.contacts.phone,
      href: `tel:${PROFILE.contacts.phoneRaw}`,
      actionText: 'Gọi trực tiếp',
      copyValue: PROFILE.contacts.phoneRaw,
      accent: 'magenta' as const,
      icon: <Phone size={21} />,
    },
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="section-watermark" aria-hidden="true">
        SIGNAL // CONNECT
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">03 // CONTACT</span>
          <h2 className="section-title">
            Khởi tạo kết nối &amp;{' '}
            <span className="gradient-text">Cùng Sáng Tạo</span>
          </h2>
          <p className="section-subtitle">
            Bạn đang tìm kiếm một cộng sự đam mê animation, tự do đổi mới giao diện và sẵn sàng bứt phá? Hãy kết nối ngay!
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Left: 4 Primary Channels (Email, GitHub, Facebook, Phone) */}
          <div className="contact-channels">
            {contactItems.map((item, idx) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <SpotlightCard accent={item.accent} className="contact-card">
                  <div className="contact-card__head">
                    <div className={`contact-card__icon is-${item.accent}`}>
                      {item.icon}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.key, item.copyValue)}
                      className={`copy-btn ${copiedKey === item.key ? 'is-copied' : ''}`}
                      title="Sao chép nhanh"
                    >
                      {copiedKey === item.key ? (
                        <>
                          <Check size={13} />
                          <span>Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <span className="contact-card__label">{item.label}</span>
                  <div className="contact-card__value">{item.value}</div>

                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="contact-card__link"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Right: Direct Creative Signal Composer */}
          <motion.div
            className="contact-composer"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard accent="dual" className="h-full">
              <div className="composer-header">
                <span className="composer-tag">DIRECT SIGNAL // TRANSMISSION</span>
                <h3>Gửi lời nhắn trực tiếp</h3>
                <p>
                  Mọi ý tưởng dự án Web Motion, Mobile App hay cơ hội thực tập/làm việc sáng tạo đều luôn được chào đón.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="composer-form">
                <div className="field-group">
                  <label htmlFor="contact-name">Tên của bạn</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Nhập tên hoặc tổ chức..."
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="contact-email">Email phản hồi</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="contact-msg">Ý tưởng / Lời nhắn</label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    required
                    placeholder="Chia sẻ về dự án hoặc cơ hội hợp tác..."
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="btn-submit-signal"
                >
                  <Send size={16} />
                  <span>{sent ? 'Đã khởi tạo tín hiệu Email!' : 'Gửi Tín Hiệu Hợp Tác'}</span>
                </motion.button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Bespoke Footer */}
        <footer className="site-footer">
          <div className="site-footer__left">
            <div className="palette-signature" title="3 màu chủ đạo độc bản">
              <span className="swatch swatch--void" />
              <span className="swatch swatch--cerulean" />
              <span className="swatch swatch--magenta" />
              <code>#0A0A0A • #007BA7 • #FF2D95</code>
            </div>
            <p>
              Crafted with Creative Freedom by <strong>{PROFILE.handle}</strong> ({PROFILE.fullName}) •{' '}
              {PROFILE.university.name}
            </p>
          </div>

          <motion.button
            type="button"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => onNavigate('home')}
            className="back-top-btn"
          >
            <span>Lên đầu trang</span>
            <ArrowUp size={16} />
          </motion.button>
        </footer>
      </div>
    </section>
  )
}
