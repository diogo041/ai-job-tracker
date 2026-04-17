const activities = [
  "Updated resume for Software Engineer Intern role",
  "Applied to Amazon SDE Intern",
  "Interview scheduled with Google",
  "Added notes for Meta application",
];

export function DashboardActivityPanel() {
  return (
    <section className="dashboard-panel dashboard-activity-panel">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Recent Activity</p>
          <h2>What changed recently</h2>
        </div>
      </div>

      <div className="dashboard-activity-list">
        {activities.map((activity) => (
          <div className="dashboard-activity-item" key={activity}>
            <div className="dashboard-activity-dot" />
            <p>{activity}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
