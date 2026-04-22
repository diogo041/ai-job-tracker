type DashboardSidebarProps = {
  activeItem:
    | "Overview"
    | "Applications"
    | "Resumes"
    | "Interviews"
    | "Analytics"
    | "Settings";
};

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Applications", href: "/applications" },
  { label: "Resumes", href: "/resumes" },
  { label: "Interviews", href: "/interviews" },
  { label: "Analytics", href: "/analytics" },
  { label: "Settings", href: "/settings" },
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
        <h3>Personalize your workflow</h3>
        <p>Keep profile, preferences, and account settings aligned with how you track your career progress.</p>
      </div>
    </aside>
  );
}
