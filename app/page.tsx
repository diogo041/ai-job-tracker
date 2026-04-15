export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Week 1 · Day 1</p>
        <h1>AI Job Tracker / Career CRM</h1>
        <p className="subtitle">
          A full-stack platform to track applications, resumes, interviews,
          analytics, and AI-powered matching.
        </p>

        <div className="card-grid">
          <div className="card">
            <h2>Planned Features</h2>
            <ul>
              <li>Authentication</li>
              <li>Job application tracking</li>
              <li>Resume upload</li>
              <li>Analytics dashboard</li>
              <li>AI resume-job matching</li>
            </ul>
          </div>

          <div className="card">
            <h2>Planned Stack</h2>
            <ul>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Nginx</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
