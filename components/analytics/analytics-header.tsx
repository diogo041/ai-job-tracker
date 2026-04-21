export function AnalyticsHeader() {
  return (
    <section className="analytics-header">
      <div>
        <p className="dashboard-kicker">Analytics</p>
        <h1>Measure your job search performance</h1>
        <p className="analytics-header-text">
          See response trends, interview conversion, and application funnel insights
          to understand what is working best.
        </p>
      </div>

      <div className="analytics-header-actions">
        <button className="dashboard-secondary-button">Export report</button>
        <button className="dashboard-primary-button">+ Generate insight</button>
      </div>
    </section>
  );
}
