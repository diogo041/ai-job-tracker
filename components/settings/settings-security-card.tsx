export function SettingsSecurityCard() {
  return (
    <section className="settings-card">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Security</p>
          <h2>Account safety</h2>
        </div>
      </div>

      <div className="settings-security-list">
        <div className="settings-security-item">
          <div>
            <strong>Password</strong>
            <p>Last changed 14 days ago</p>
          </div>
          <button className="dashboard-secondary-button">Change password</button>
        </div>

        <div className="settings-security-item">
          <div>
            <strong>Two-factor authentication</strong>
            <p>Secure your account with an additional verification step.</p>
          </div>
          <button className="dashboard-primary-button">Enable 2FA</button>
        </div>

        <div className="settings-security-item">
          <div>
            <strong>Active sessions</strong>
            <p>Review where your account is currently signed in.</p>
          </div>
          <button className="dashboard-secondary-button">View sessions</button>
        </div>
      </div>
    </section>
  );
}
