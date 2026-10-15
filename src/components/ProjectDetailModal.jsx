import { useEffect, useRef } from 'react'
import { ArrowRight, X } from 'lucide-react'

function ProjectDetailModal({ project, contactHref, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const ProjectIcon = project.icon

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow

    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const focusable = dialogRef.current?.querySelectorAll('a[href], button:not(:disabled)')
    if (!focusable?.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      className="project-detail-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="project-detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        aria-describedby="project-detail-summary"
        onKeyDown={handleKeyDown}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <div className="detail-header">
          <div className="card-icon detail-icon"><ProjectIcon /></div>
          <div>
            <span className="tag">{project.category}</span>
            <h2 id="project-detail-title">{project.title}</h2>
          </div>
        </div>

        <div className="detail-meta">
          <div>
            <span>Project period</span>
            <strong>{project.period}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{project.period.toLowerCase().includes('ongoing') ? 'In progress' : 'Completed'}</strong>
          </div>
        </div>

        <p id="project-detail-summary" className="detail-summary">{project.summary}</p>

        <div className="detail-columns">
          <div>
            <h3>Key functions</h3>
            <ul>
              {project.functions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h3>Achievements</h3>
            <ul>
              {project.achievements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <a className="btn detail-cta" href={contactHref} onClick={onClose}>
          Discuss a similar project <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

export default ProjectDetailModal
