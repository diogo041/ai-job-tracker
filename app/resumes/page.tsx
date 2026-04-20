import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar";
import { ResumesHeader } from "../../components/resumes/resumes-header";
import { ResumesList } from "../../components/resumes/resumes-list";
import { ResumesSummary } from "../../components/resumes/resumes-summary";
import { ResumesUploadPanel } from "../../components/resumes/resumes-upload-panel";

export default function ResumesPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">
        <DashboardSidebar activeItem="Resumes" />

        <section className="dashboard-content">
          <ResumesHeader />
          <ResumesSummary />
          <ResumesUploadPanel />
          <ResumesList />
        </section>
      </div>
    </main>
  );
}
