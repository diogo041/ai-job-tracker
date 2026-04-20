export function ResumesHeader() {
  return (
    <section className="resumes-header">
      <div>
        <p className="dashboard-kicker">Resumes</p>
        <h1>Manage your resume versions</h1>
        <p className="resumes-header-text">
          Organize tailored resumes for different roles, companies, and career goals.
        </p>
      </div>

      <div className="resumes-header-actions">
        <button className="dashboard-secondary-button">Import resume</button>
        <button className="dashboard-primary-button">+ Upload new resume</button>
      </div>
    </section>
  );
}
