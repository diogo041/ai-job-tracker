const summaryItems = [
  { label: "Upcoming", value: "3" },
  { label: "Completed", value: "5" },
  { label: "This Week", value: "2" },
  { label: "Final Rounds", value: "1" },
];

export function InterviewsSummary() {
  return (
    <section className="interviews-summary-grid">
      {summaryItems.map((item) => (
        <article className="interviews-summary-card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  );
}
