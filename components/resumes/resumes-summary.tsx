import { SummaryCardGrid } from "../ui/summary-card-grid";

const summaryItems = [
  { label: "Total Resumes", value: "6" },
  { label: "Active Versions", value: "4" },
  { label: "Role-Specific", value: "3" },
  { label: "Recently Updated", value: "2" },
];

export function ResumesSummary() {
  return <SummaryCardGrid items={summaryItems} />;
}
