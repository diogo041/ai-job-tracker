export function ApplicationsHeader() {
  return (
    <section className="applications-header">
      <div>
        <p className="dashboard-kicker">Applications</p>
        <h1>Manage your application pipeline</h1>
        <p className="applications-header-text">
          Track roles, companies, statuses, locations, and notes in one clean view.
        </p>
      </div>

      <div className="applications-header-actions">
        <button className="dashboard-secondary-button">Import CSV</button>
        <button className="dashboard-primary-button">+ New application</button>
      </div>
    </section>
  );
}
