const navItems = [
  "Overview",
  "Applications",
  "Resumes",
  "Interviews",
  "Analytics",
  "Settings",
];

export function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-brand">
        <div className="dashboard-brand-mark">AJ</div>
        <div>
          <strong>AI Job Tracker</strong>
          <p>Career CRM</p>
        </div>
      </div>

      <nav className="dashboard-nav">
        {navItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={index === 0 ? "dashboard-nav-item active" : "dashboard-nav-item"}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="dashboard-sidebar-card">
        <p className="dashboard-sidebar-label">Next Goal</p>
        <h3>Reach 25 applications</h3>
        <p>Keep daily progress visible with applications, interviews, and insights.</p>
      </div>
    </aside>
  );
}
