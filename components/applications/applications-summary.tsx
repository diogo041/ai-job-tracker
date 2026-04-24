import { SummaryCardGrid } from "../ui/summary-card-grid";

const summaryItems = [
  { label: "Applied", value: "10" },
  { label: "Interview", value: "4" },
  { label: "Shortlisted", value: "3" },
  { label: "Rejected", value: "2" },
];

export function ApplicationsSummary() {
  return <SummaryCardGrid items={summaryItems} />;
}
