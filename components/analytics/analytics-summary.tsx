const summaryItems = [
  { label: "Applications Sent", value: "24" },
  { label: "Responses", value: "9" },
  { label: "Interviews", value: "6" },
  { label: "Response Rate", value: "37%" },
];

export function AnalyticsSummary() {
  return (
    <section className="analytics-summary-grid">
      {summaryItems.map((item) => (
        <article className="analytics-summary-card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  );
}
