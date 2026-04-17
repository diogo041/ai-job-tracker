import { DashboardActivityPanel } from "../../components/dashboard/dashboard-activity-panel";
import { DashboardApplicationsTable } from "../../components/dashboard/dashboard-applications-table";
import { DashboardOverviewCards } from "../../components/dashboard/dashboard-overview-cards";
import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar";
import { DashboardTopbar } from "../../components/dashboard/dashboard-topbar";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">
        <DashboardSidebar />

        <section className="dashboard-content">
          <DashboardTopbar />
          <DashboardOverviewCards />

          <div className="dashboard-main-grid">
            <DashboardApplicationsTable />
            <DashboardActivityPanel />
          </div>
        </section>
      </div>
    </main>
  );
}
