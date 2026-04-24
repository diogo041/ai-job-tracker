import { SummaryCardGrid } from "../ui/summary-card-grid";

const summaryItems = [
  { label: "Upcoming", value: "3" },
  { label: "Completed", value: "5" },
  { label: "This Week", value: "2" },
  { label: "Final Rounds", value: "1" },
];

export function InterviewsSummary() {
  return <SummaryCardGrid items={summaryItems} />;
}
