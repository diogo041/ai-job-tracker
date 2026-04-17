export function DashboardTopbar() {
  return (
    <header className="dashboard-topbar">
      <div>
        <p className="dashboard-kicker">Dashboard</p>
        <h1>Welcome back, Diogo</h1>
      </div>

      <div className="dashboard-topbar-actions">
        <input
          type="text"
          className="dashboard-search"
          placeholder="Search applications"
        />
        <a href="/sign-in" className="dashboard-secondary-button">
          Log out
        </a>
        <button className="dashboard-primary-button">+ Add application</button>
      </div>
    </header>
  );
}
