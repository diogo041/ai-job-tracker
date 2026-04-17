const applications = [
  {
    company: "Amazon",
    role: "SDE Intern",
    status: "Applied",
    location: "New York, NY",
    date: "Apr 16",
  },
  {
    company: "Google",
    role: "Software Engineer Intern",
    status: "Interview",
    location: "Remote",
    date: "Apr 15",
  },
  {
    company: "Meta",
    role: "Frontend Engineer Intern",
    status: "Shortlisted",
    location: "Menlo Park, CA",
    date: "Apr 14",
  },
  {
    company: "Stripe",
    role: "Full Stack Intern",
    status: "Rejected",
    location: "Remote",
    date: "Apr 12",
  },
];

export function DashboardApplicationsTable() {
  return (
    <section className="dashboard-panel">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Recent Applications</p>
          <h2>Track your latest progress</h2>
        </div>
        <a href="#" className="dashboard-text-link">
          View all
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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={`${application.company}-${application.role}`}>
                <td>{application.company}</td>
                <td>{application.role}</td>
                <td>
                  <span
                    className={`dashboard-status ${application.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {application.status}
                  </span>
                </td>
                <td>{application.location}</td>
                <td>{application.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
