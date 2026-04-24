import { PageHeader } from "../ui/page-header";

export function SettingsHeader() {
  return (
    <PageHeader
      kicker="Settings"
      title="Manage your account preferences"
      description="Update your profile details, adjust tracking preferences, and review account security settings in one place."
      secondaryActionLabel="Reset changes"
      primaryActionLabel="Save settings"
    />
  );
}
