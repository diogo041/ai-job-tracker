import { AnalyticsFunnelPanel } from "../../components/analytics/analytics-funnel-panel";
import { AnalyticsHeader } from "../../components/analytics/analytics-header";
import { AnalyticsMetricsGrid } from "../../components/analytics/analytics-metrics-grid";
import { AnalyticsSummary } from "../../components/analytics/analytics-summary";
import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar";

export default function AnalyticsPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">
        <DashboardSidebar activeItem="Analytics" />

        <section className="dashboard-content">
          <AnalyticsHeader />
          <AnalyticsSummary />
          <AnalyticsMetricsGrid />
          <AnalyticsFunnelPanel />
        </section>
      </div>
    </main>
  );
}
