const resumeRows = [
  {
    name: "Software-Engineer-Resume.pdf",
    role: "Software Engineer Intern",
    updated: "Apr 18, 2026",
    status: "Active",
    format: "PDF",
  },
  {
    name: "Frontend-Resume.pdf",
    role: "Frontend Engineer Intern",
    updated: "Apr 16, 2026",
    status: "Active",
    format: "PDF",
  },
  {
    name: "Full-Stack-Resume.docx",
    role: "Full Stack Intern",
    updated: "Apr 15, 2026",
    status: "Draft",
    format: "DOCX",
  },
  {
    name: "General-Tech-Resume.pdf",
    role: "General Applications",
    updated: "Apr 12, 2026",
    status: "Archived",
    format: "PDF",
  },
];

export function ResumesList() {
  return (
    <section className="resumes-list-panel">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Resume Library</p>
          <h2>All saved versions</h2>
        </div>
        <a href="#" className="dashboard-text-link">
          View details
        </a>
      </div>

      <div className="dashboard-table-wrap">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Target Role</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Format</th>
            </tr>
          </thead>
          <tbody>
            {resumeRows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td>{row.updated}</td>
                <td>
                  <span
                    className={`resume-status ${row.status.toLowerCase()}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
