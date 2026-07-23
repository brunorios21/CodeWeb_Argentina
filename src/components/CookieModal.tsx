import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

const CONSENT_KEY = 'cookie_consent'

export function CookieModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      setIsOpen(window.localStorage.getItem(CONSENT_KEY) === null)
    } catch {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    document.body.classList.add('cookie-modal-open')
    return () => document.body.classList.remove('cookie-modal-open')
  }, [isOpen])

  const saveConsent = (value: 'true' | 'essential') => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value)
    } finally {
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div className="cookie-overlay modal-backdrop" role="presentation">
      <section className="cookie-modal terms-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title" tabIndex={-1}>
        <p className="eyebrow">Privacidad y cookies</p>
        <h2 id="cookie-title">Tu experiencia, con control.</h2>
        <p>
          Usamos cookies necesarias para el funcionamiento del sitio y, con tu permiso, para comprender cómo se navega. Podés consultar el detalle en nuestros <Link to="/terminos" onClick={() => saveConsent('essential')}>Términos y Condiciones</Link>.
        </p>
        <div className="cookie-actions">
          <button type="button" className="cookie-button-secondary" onClick={() => saveConsent('essential')}>Solo necesarias</button>
          <button type="button" className="cookie-button-primary" onClick={() => saveConsent('true')}>Aceptar todo</button>
        </div>
      </section>
    </div>
    , document.body
  )
}
