const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "CSS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "API routes", "Business logic", "Validation"]
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "Docker", "Nginx", "VPS deployment"]
  },
  {
    title: "Dev Workflow",
    items: ["GitHub", "Pull Requests", "GitHub Actions", "Monitoring"]
  }
];

export function HomeStack() {
  return (
    <section id="stack" className="section section-alt">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Tech Stack</p>
          <h2>Built step by step like a real production project</h2>
          <p>
            The goal is not only to build features, but also to show clean
            engineering workflow, deployment readiness, and daily progress.
          </p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
