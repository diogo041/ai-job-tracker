export function HomeHero() {
  return (
    <section className="hero-section">
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Week 1 · Day 2</p>
          <h1 className="hero-title">
            Track job applications like a real product, not a spreadsheet.
          </h1>
          <p className="hero-text">
            AI Job Tracker is a full-stack Career CRM that helps manage
            applications, resumes, interviews, analytics, and AI-powered job
            matching in one place.
          </p>

          <div className="hero-actions">
            <a href="#features" className="button button-primary">
              Explore features
            </a>
            <a href="#stack" className="button button-secondary">
              View stack
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-value">4 Weeks</span>
              <span className="stat-label">Build roadmap</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Daily PRs</span>
              <span className="stat-label">Consistent progress</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Full Stack</span>
              <span className="stat-label">Frontend to deployment</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card">
            <p className="panel-label">Planned Modules</p>
            <ul className="panel-list">
              <li>Authentication</li>
              <li>Application tracking</li>
              <li>Resume upload</li>
              <li>Interview pipeline</li>
              <li>Analytics dashboard</li>
              <li>AI resume-job matching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
