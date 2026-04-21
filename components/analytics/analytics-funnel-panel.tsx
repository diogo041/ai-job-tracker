const funnelSteps = [
  { label: "Applied", value: "24", width: "100%" },
  { label: "Responded", value: "9", width: "72%" },
  { label: "Interviewed", value: "6", width: "54%" },
  { label: "Final Round", value: "2", width: "36%" },
];

const insights = [
  "Referral applications are converting better than job boards.",
  "Frontend roles are getting faster responses than general applications.",
  "Interview progress improved after tailoring resume versions.",
];

export function AnalyticsFunnelPanel() {
  return (
    <section className="analytics-funnel-layout">
      <article className="analytics-panel">
        <div className="dashboard-panel-header">
          <div>
            <p className="dashboard-panel-kicker">Conversion Funnel</p>
            <h2>Application pipeline health</h2>
          </div>
        </div>

        <div className="analytics-funnel">
          {funnelSteps.map((step) => (
            <div className="analytics-funnel-row" key={step.label}>
              <div className="analytics-funnel-meta">
                <span>{step.label}</span>
                <strong>{step.value}</strong>
              </div>
              <div className="analytics-funnel-bar">
                <div
                  className="analytics-funnel-fill"
                  style={{ width: step.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="analytics-panel">
        <div className="dashboard-panel-header">
          <div>
            <p className="dashboard-panel-kicker">Insights</p>
            <h2>What the numbers suggest</h2>
          </div>
        </div>

        <div className="analytics-insight-list">
          {insights.map((insight) => (
            <div className="analytics-insight-item" key={insight}>
              <div className="analytics-insight-dot" />
              <p>{insight}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
