export function HomeHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="/" className="brand">
          <span className="brand-mark">AJ</span>
          <span>AI Job Tracker</span>
        </a>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#stack">Stack</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
      </div>
    </header>
  );
}
