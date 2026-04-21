const monthlyBars = [
  { month: "Jan", value: 35 },
  { month: "Feb", value: 48 },
  { month: "Mar", value: 62 },
  { month: "Apr", value: 78 },
];

const sourceRows = [
  { source: "LinkedIn", rate: "41%", note: "Strongest source" },
  { source: "Referral", rate: "58%", note: "Best conversion" },
  { source: "Company Site", rate: "29%", note: "Needs targeting" },
];

export function AnalyticsMetricsGrid() {
  return (
    <section className="analytics-metrics-grid">
      <article className="analytics-panel">
        <div className="dashboard-panel-header">
          <div>
            <p className="dashboard-panel-kicker">Monthly Activity</p>
            <h2>Applications trend</h2>
          </div>
        </div>

        <div className="analytics-bar-chart">
          {monthlyBars.map((bar) => (
            <div className="analytics-bar-item" key={bar.month}>
              <div className="analytics-bar-track">
                <div
                  className="analytics-bar-fill"
                  style={{ height: `${bar.value}%` }}
                />
              </div>
              <span>{bar.month}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="analytics-panel">
        <div className="dashboard-panel-header">
          <div>
            <p className="dashboard-panel-kicker">Application Sources</p>
            <h2>Which source performs best</h2>
          </div>
        </div>

        <div className="analytics-source-list">
          {sourceRows.map((row) => (
            <div className="analytics-source-item" key={row.source}>
              <div>
                <strong>{row.source}</strong>
                <p>{row.note}</p>
              </div>
              <span>{row.rate}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
