export function SettingsHeader() {
  return (
    <section className="settings-header">
      <div>
        <p className="dashboard-kicker">Settings</p>
        <h1>Manage your account preferences</h1>
        <p className="settings-header-text">
          Update your profile details, adjust tracking preferences, and review
          account security settings in one place.
        </p>
      </div>

      <div className="settings-header-actions">
        <button className="dashboard-secondary-button">Reset changes</button>
        <button className="dashboard-primary-button">Save settings</button>
      </div>
    </section>
  );
}
