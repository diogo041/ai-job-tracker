import { PageHeader } from "../ui/page-header";

export function ResumesHeader() {
  return (
    <PageHeader
      kicker="Resumes"
      title="Manage your resume versions"
      description="Organize tailored resumes for different roles, companies, and career goals."
      secondaryActionLabel="Import resume"
      primaryActionLabel="+ Upload new resume"
    />
  );
}
