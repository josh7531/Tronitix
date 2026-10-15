import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ProjectDetailModal from './ProjectDetailModal'

function Products({ products, filter, setFilter, navigate }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = products.filter(p =>
    filter === 'All' || p.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <section id="products" className="section products">
      <div className="container">
        <SectionTitle eyebrow="OUR WORK" title="Products & projects" text="Selected technology products and systems developed by the team." />
        <div className="filters" role="group" aria-label="Filter projects by category">
          {['All', 'Hardware', 'Software', 'IoT'].map(f => (
            <button
              type="button"
              key={f}
              className={filter === f ? 'active' : ''}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="cards product-grid">
          {filtered.slice(0, 3).map((project) => {
            const { title, category, icon: Icon, text } = project

            return (
              <article className="card product-card" key={title}>
                <div className="card-icon"><Icon /></div>
                <span className="tag">{category}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <button
                  type="button"
                  className="read-more"
                  onClick={() => setSelectedProject(project)}
                >
                  View project details <ArrowRight size={16} />
                </button>
              </article>
            )
          })}
          {filtered.length > 3 && (
            <article className="card product-card view-all-card">
              <div className="card-icon"><ArrowRight /></div>
              <span className="tag">THE FULL PORTFOLIO</span>
              <h3>View all projects</h3>
              <p>See our complete portfolio of products and projects.</p>
              <a className="read-more" href="/projects/" onClick={(e) => { e.preventDefault(); navigate('/projects/') }}>
                Browse projects <ArrowRight size={16} />
              </a>
            </article>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          contactHref="#contact"
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Products
