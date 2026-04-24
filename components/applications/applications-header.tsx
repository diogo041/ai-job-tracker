import { PageHeader } from "../ui/page-header";

export function ApplicationsHeader() {
  return (
    <PageHeader
      kicker="Applications"
      title="Manage your application pipeline"
      description="Track roles, companies, statuses, locations, and notes in one clean view."
      secondaryActionLabel="Import CSV"
      primaryActionLabel="+ New application"
    />
  );
}
