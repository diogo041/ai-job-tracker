import { ApplicationsFilterBar } from "../../components/applications/applications-filter-bar";
import { ApplicationsHeader } from "../../components/applications/applications-header";
import { ApplicationsList } from "../../components/applications/applications-list";
import { ApplicationsSummary } from "../../components/applications/applications-summary";
import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar";

export default function ApplicationsPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">
        <DashboardSidebar activeItem="Applications" />

        <section className="dashboard-content">
          <ApplicationsHeader />
          <ApplicationsSummary />
          <ApplicationsFilterBar />
          <ApplicationsList />
        </section>
      </div>
    </main>
  );
}
