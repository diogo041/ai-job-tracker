import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar";
import { InterviewsHeader } from "../../components/interviews/interviews-header";
import { InterviewsList } from "../../components/interviews/interviews-list";
import { InterviewsSummary } from "../../components/interviews/interviews-summary";
import { InterviewsUpcomingPanel } from "../../components/interviews/interviews-upcoming-panel";

export default function InterviewsPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">
        <DashboardSidebar activeItem="Interviews" />

        <section className="dashboard-content">
          <InterviewsHeader />
          <InterviewsSummary />
          <InterviewsUpcomingPanel />
          <InterviewsList />
        </section>
      </div>
    </main>
  );
}
