export function ResumesUploadPanel() {
  return (
    <section className="resumes-upload-panel">
      <div>
        <p className="dashboard-panel-kicker">Upload Area</p>
        <h2>Add a new resume version</h2>
        <p className="resumes-upload-text">
          Keep tailored resumes ready for software engineering, frontend, and internship applications.
        </p>
      </div>

      <div className="resumes-dropzone">
        <div className="resumes-dropzone-icon">↑</div>
        <h3>Drop resume file here</h3>
        <p>PDF or DOCX up to 5 MB</p>
        <button className="dashboard-primary-button">Choose file</button>
      </div>
    </section>
  );
}
