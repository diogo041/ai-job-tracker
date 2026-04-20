export function InterviewsHeader() {
  return (
    <section className="interviews-header">
      <div>
        <p className="dashboard-kicker">Interviews</p>
        <h1>Track your interview pipeline</h1>
        <p className="interviews-header-text">
          Keep upcoming rounds, formats, interviewers, and preparation notes in one clear view.
        </p>
      </div>

      <div className="interviews-header-actions">
        <button className="dashboard-secondary-button">Export schedule</button>
        <button className="dashboard-primary-button">+ Add interview</button>
      </div>
    </section>
  );
}
