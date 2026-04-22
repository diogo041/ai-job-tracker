export function SettingsProfileCard() {
  return (
    <section className="settings-card">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Profile</p>
          <h2>Personal information</h2>
        </div>
      </div>

      <div className="settings-form-grid">
        <div className="settings-field">
          <label htmlFor="full-name">Full name</label>
          <input id="full-name" type="text" defaultValue="Diogo Dcosta" />
        </div>

        <div className="settings-field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" defaultValue="diogo.dcosta@icloud.com" />
        </div>

        <div className="settings-field">
          <label htmlFor="role-focus">Target role</label>
          <input id="role-focus" type="text" defaultValue="Software Engineer Intern" />
        </div>

        <div className="settings-field">
          <label htmlFor="location">Preferred location</label>
          <input id="location" type="text" defaultValue="New York / Remote" />
        </div>
      </div>
    </section>
  );
}
