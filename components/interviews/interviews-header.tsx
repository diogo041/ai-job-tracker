import { PageHeader } from "../ui/page-header";

export function InterviewsHeader() {
  return (
    <PageHeader
      kicker="Interviews"
      title="Track your interview pipeline"
      description="Keep upcoming rounds, formats, interviewers, and preparation notes in one clear view."
      secondaryActionLabel="Export schedule"
      primaryActionLabel="+ Add interview"
    />
  );
}
