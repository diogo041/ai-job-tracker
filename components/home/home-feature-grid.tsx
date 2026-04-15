const features = [
  {
    title: "Application Tracking",
    description:
      "Track job status, company details, dates, links, and notes in a clean workflow."
  },
  {
    title: "Resume Management",
    description:
      "Upload and organize resumes for different roles and applications."
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize applications, interviews, responses, and progress with useful insights."
  },
  {
    title: "AI Matching",
    description:
      "Compare resume content with job descriptions to improve targeting and relevance."
  },
  {
    title: "Production Deployment",
    description:
      "Deploy on a self-managed VPS with Docker, Nginx, and GitHub Actions."
  },
  {
    title: "Career CRM Workflow",
    description:
      "Bring jobs, interviews, documents, and progress into one central platform."
  }
];

export function HomeFeatureGrid() {
  return (
    <section id="features" className="section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Core Features</p>
          <h2>What this project is being built to do</h2>
          <p>
            Day 2 focuses on creating a stronger user-facing homepage before we
            move into auth, data models, and backend workflows.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
