const applicationRows = [
  {
    company: "Amazon",
    role: "SDE Intern",
    status: "Applied",
    location: "New York, NY",
    appliedDate: "Apr 16, 2026",
    source: "LinkedIn",
  },
  {
    company: "Google",
    role: "Software Engineer Intern",
    status: "Interview",
    location: "Remote",
    appliedDate: "Apr 15, 2026",
    source: "Referral",
  },
  {
    company: "Meta",
    role: "Frontend Engineer Intern",
    status: "Shortlisted",
    location: "Menlo Park, CA",
    appliedDate: "Apr 14, 2026",
    source: "Company Site",
  },
  {
    company: "Stripe",
    role: "Full Stack Intern",
    status: "Rejected",
    location: "Remote",
    appliedDate: "Apr 12, 2026",
    source: "LinkedIn",
  },
  {
    company: "Datadog",
    role: "Software Engineer Intern",
    status: "Applied",
    location: "New York, NY",
    appliedDate: "Apr 11, 2026",
    source: "Company Site",
  },
];

export function ApplicationsList() {
  return (
    <section className="applications-list-panel">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Application List</p>
          <h2>All tracked roles</h2>
        </div>
        <a href="#" className="dashboard-text-link">
          Export
        </a>
      </div>

      <div className="dashboard-table-wrap">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Location</th>
              <th>Applied Date</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {applicationRows.map((row) => (
              <tr key={`${row.company}-${row.role}`}>
                <td>{row.company}</td>
                <td>{row.role}</td>
                <td>
                  <span
                    className={`dashboard-status ${row.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.location}</td>
                <td>{row.appliedDate}</td>
                <td>{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
