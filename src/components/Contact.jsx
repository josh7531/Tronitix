import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'
import emailjs from '@emailjs/browser'

function Contact() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true)
    setStatus('')

    try {
      await emailjs.sendForm(
        'service_cwop4eo',
        'template_2jmc5mm',
        form,
        {
          publicKey: '9oYg_6MA5pX-SXKr2',
        }
      )
      form.reset()
      setStatus('Thanks for reaching out. Your project request has been sent.')
    } catch (error) {
      console.error('Project request could not be sent:', error)
      setStatus('We couldn’t send your request right now. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">

        <div>
          <SectionTitle
            eyebrow="CONTACT"
            title="Have an idea? Let's build it."
            text="Tell us about your hardware, software, IoT, robotics or research requirement."
          />

          <div className="contact-detail">
            <MapPin />
            <span>
              39 E/3-2, Faith Complex, Anandan Nagar,<br />
              Medical College Road, Ranithottam,<br />
              Nagercoil, Tamil Nadu 629001
            </span>
          </div>

          <div className="contact-detail">
            <Phone />
            <a href="tel:+919489309512">+91 94893 09512</a>
          </div>

          <div className="contact-detail">
            <Mail />
            <a href="mailto:tronitix.official@gmail.com">tronitix.official@gmail.com</a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={sendEmail}
        >

          <label>
            Full Name

            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your name"
            />
          </label>

          <label>
            Email

            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
            />
          </label>

          <label>
            Project Type

            <select name="type">
              <option>Hardware</option>
              <option>Software</option>
              <option>IoT</option>
              <option>Robotics</option>
              <option>Research / Prototype</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Message

            <textarea
              name="message"
              required
              placeholder="Tell us what you want to build..."
            ></textarea>
          </label>

          <button className="btn" type="submit" disabled={sending}>
            {sending ? 'Sending request…' : 'Send project request'}
            <ArrowRight size={18} />
          </button>
          {status && <p className={`form-status ${status.startsWith('We couldn’t') ? 'error' : ''}`} role="status" aria-live="polite">{status}</p>}
        </form>

      </div>
    </section>
  )
}

export default Contact