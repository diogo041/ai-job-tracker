const overviewCards = [
  {
    label: "Total Applications",
    value: "18",
    change: "+4 this week",
  },
  {
    label: "Interviews",
    value: "5",
    change: "+2 scheduled",
  },
  {
    label: "Response Rate",
    value: "38%",
    change: "Improving steadily",
  },
  {
    label: "Resumes Sent",
    value: "12",
    change: "3 tailored versions",
  },
];

export function DashboardOverviewCards() {
  return (
    <section className="dashboard-overview-grid">
      {overviewCards.map((card) => (
        <article className="dashboard-overview-card" key={card.label}>
          <p className="dashboard-card-label">{card.label}</p>
          <h2>{card.value}</h2>
          <span>{card.change}</span>
        </article>
      ))}
    </section>
  );
}
