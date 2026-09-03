import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'
import emailjs from '@emailjs/browser'

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_cwop4eo',
        'template_2jmc5mm',
        e.target,
        {
          publicKey: '9oYg_6MA5pX-SXKr2',
        }
      )
      .then(
        () => {
          alert('Project request sent successfully!')
          e.target.reset()
        },
        (error) => {
          console.error('FAILED...', error)
          alert('Failed to send request. Please try again.')
        }
      )
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
              Stella Mary's College of Engineering,
              Kanyakumari, Tamil Nadu, India
            </span>
          </div>

          <div className="contact-detail">
            <Phone />
            <span>+91 12345 67890</span>
          </div>

          <div className="contact-detail">
            <Mail />
            <span>tronitix.official@gmail.com</span>
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
              required
              placeholder="Enter your name"
            />
          </label>

          <label>
            Email

            <input
              name="email"
              type="email"
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

          <button
            className="btn"
            type="submit"
          >
            Send Project Request
            <ArrowRight size={18} />
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact