const summaryItems = [
  { label: "Applied", value: "10" },
  { label: "Interview", value: "4" },
  { label: "Shortlisted", value: "3" },
  { label: "Rejected", value: "2" },
];

export function ApplicationsSummary() {
  return (
    <section className="applications-summary-grid">
      {summaryItems.map((item) => (
        <article className="applications-summary-card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  );
}
