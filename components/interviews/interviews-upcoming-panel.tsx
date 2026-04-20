const upcomingRounds = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    round: "Technical Round 2",
    time: "Apr 22 · 11:00 AM",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    round: "Hiring Manager Round",
    time: "Apr 23 · 2:30 PM",
  },
  {
    company: "Meta",
    role: "Frontend Engineer Intern",
    round: "Behavioral Round",
    time: "Apr 25 · 10:00 AM",
  },
];

export function InterviewsUpcomingPanel() {
  return (
    <section className="interviews-upcoming-panel">
      <div className="dashboard-panel-header">
        <div>
          <p className="dashboard-panel-kicker">Upcoming Interviews</p>
          <h2>What’s next on your schedule</h2>
        </div>
      </div>

      <div className="interviews-upcoming-list">
        {upcomingRounds.map((item) => (
          <article className="interviews-upcoming-card" key={`${item.company}-${item.round}`}>
            <p className="interviews-upcoming-time">{item.time}</p>
            <h3>{item.company}</h3>
            <p>{item.role}</p>
            <span>{item.round}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
