import SectionTitle from './SectionTitle'

function Process({ processSteps }) {
  return (
    <section className="section process">
      <div className="container">
        <SectionTitle eyebrow="OUR PROCESS" title="From problem to working solution" />
        <div className="process-grid">
          {processSteps.map(([title, text], index) => (
            <div className="process-step" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
