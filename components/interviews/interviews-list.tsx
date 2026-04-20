const interviewRows = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    round: "Technical Round 1",
    format: "Virtual",
    date: "Apr 20, 2026",
    status: "Scheduled",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    round: "Online Assessment",
    format: "Online",
    date: "Apr 18, 2026",
    status: "Completed",
  },
  {
    company: "Meta",
    role: "Frontend Engineer Intern",
    round: "Behavioral",
    format: "Virtual",
    date: "Apr 25, 2026",
    status: "Scheduled",
  },
  {
    company: "Stripe",
    role: "Full Stack Intern",
    round: "Recruiter Screen",
    format: "Phone",
    date: "Apr 17, 2026",
    status: "Completed",
  },
];

export function InterviewsList() {
  return (
    <section className="interviews-list-panel">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Interview Schedule</p>
          <h2>All interview rounds</h2>
        </div>
        <a href="#" className="dashboard-text-link">
          View calendar
        </a>
      </div>

      <div className="dashboard-table-wrap">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Round</th>
              <th>Format</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {interviewRows.map((row) => (
              <tr key={`${row.company}-${row.round}`}>
                <td>{row.company}</td>
                <td>{row.role}</td>
                <td>{row.round}</td>
                <td>{row.format}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`interview-status ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
