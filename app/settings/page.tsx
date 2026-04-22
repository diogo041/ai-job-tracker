import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar";
import { SettingsHeader } from "../../components/settings/settings-header";
import { SettingsPreferencesCard } from "../../components/settings/settings-preferences-card";
import { SettingsProfileCard } from "../../components/settings/settings-profile-card";
import { SettingsSecurityCard } from "../../components/settings/settings-security-card";

export default function SettingsPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">
        <DashboardSidebar activeItem="Settings" />

        <section className="dashboard-content">
          <SettingsHeader />

          <div className="settings-grid">
            <SettingsProfileCard />
            <SettingsPreferencesCard />
          </div>

          <SettingsSecurityCard />
        </section>
      </div>
    </main>
  );
}
