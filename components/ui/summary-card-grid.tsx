type SummaryItem = {
  label: string;
  value: string;
};

type SummaryCardGridProps = {
  items: SummaryItem[];
};

export function SummaryCardGrid({ items }: SummaryCardGridProps) {
  return (
    <section className="summary-grid">
      {items.map((item) => (
        <article className="summary-card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </article>
      ))}
    </section>
  );
}
