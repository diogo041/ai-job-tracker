type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <section className="auth-brand-panel">
          <p className="auth-kicker">AI Job Tracker</p>
          <h1>Manage your job search like a real workflow.</h1>
          <p>
            Track applications, resumes, interviews, and progress in one
            structured Career CRM.
          </p>

          <div className="auth-points">
            <div className="auth-point">
              <strong>Applications</strong>
              <span>Track status, deadlines, and company notes.</span>
            </div>
            <div className="auth-point">
              <strong>Resumes</strong>
              <span>Organize tailored resumes for different roles.</span>
            </div>
            <div className="auth-point">
              <strong>Insights</strong>
              <span>Measure progress with analytics and AI matching later.</span>
            </div>
          </div>
        </section>

        <section className="auth-card">
          <div className="auth-card-header">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          {children}
        </section>
      </div>
    </main>
  );
}
