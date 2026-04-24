import { SummaryCardGrid } from "../ui/summary-card-grid";

const summaryItems = [
  { label: "Applications Sent", value: "24" },
  { label: "Responses", value: "9" },
  { label: "Interviews", value: "6" },
  { label: "Response Rate", value: "37%" },
];

export function AnalyticsSummary() {
  return <SummaryCardGrid items={summaryItems} />;
}
