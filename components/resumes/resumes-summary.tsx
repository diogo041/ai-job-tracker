const summaryItems = [
  { label: "Total Resumes", value: "6" },
  { label: "Active Versions", value: "4" },
  { label: "Role-Specific", value: "3" },
  { label: "Recently Updated", value: "2" },
];

export function ResumesSummary() {
  return (
    <section className="resumes-summary-grid">
      {summaryItems.map((item) => (
        <article className="resumes-summary-card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  );
}
