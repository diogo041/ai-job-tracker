type DashboardSidebarProps = {
  activeItem:
    | "Overview"
    | "Applications"
    | "Resumes"
    | "Interviews"
    | "Analytics";
};

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Applications", href: "/applications" },
  { label: "Resumes", href: "/resumes" },
  { label: "Interviews", href: "/interviews" },
  { label: "Analytics", href: "/analytics" },
  { label: "Settings", href: "#" },
];

export function DashboardSidebar({ activeItem }: DashboardSidebarProps) {
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
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              item.label === activeItem
                ? "dashboard-nav-item active"
                : "dashboard-nav-item"
            }
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="dashboard-sidebar-card">
        <p className="dashboard-sidebar-label">Next Goal</p>
        <h3>Turn activity into insight</h3>
        <p>Measure application outcomes, interview progress, and response trends in one place.</p>
      </div>
    </aside>
  );
}
