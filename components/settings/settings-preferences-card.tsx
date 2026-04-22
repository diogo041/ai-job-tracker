export function SettingsPreferencesCard() {
  return (
    <section className="settings-card">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Preferences</p>
          <h2>Tracking preferences</h2>
        </div>
      </div>

      <div className="settings-option-list">
        <label className="settings-toggle-row">
          <div>
            <strong>Email reminders</strong>
            <p>Receive reminders for applications and upcoming interviews.</p>
          </div>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="settings-toggle-row">
          <div>
            <strong>Weekly summary</strong>
            <p>Get a weekly overview of applications, responses, and interviews.</p>
          </div>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="settings-toggle-row">
          <div>
            <strong>Resume suggestions</strong>
            <p>Show AI-based resume targeting suggestions in future versions.</p>
          </div>
          <input type="checkbox" />
        </label>

        <div className="settings-field">
          <label htmlFor="default-view">Default landing page</label>
          <select id="default-view" defaultValue="dashboard">
            <option value="dashboard">Dashboard</option>
            <option value="applications">Applications</option>
            <option value="resumes">Resumes</option>
            <option value="interviews">Interviews</option>
            <option value="analytics">Analytics</option>
          </select>
        </div>
      </div>
    </section>
  );
}
