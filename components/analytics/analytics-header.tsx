import { PageHeader } from "../ui/page-header";

export function AnalyticsHeader() {
  return (
    <PageHeader
      kicker="Analytics"
      title="Measure your job search performance"
      description="See response trends, interview conversion, and application funnel insights to understand what is working best."
      secondaryActionLabel="Export report"
      primaryActionLabel="+ Generate insight"
    />
  );
}
