const statusFilters = [
  "All",
  "Applied",
  "Interview",
  "Shortlisted",
  "Rejected",
];

export function ApplicationsFilterBar() {
  return (
    <section className="applications-filter-bar">
      <div className="applications-search-wrap">
        <input
          type="text"
          className="applications-search"
          placeholder="Search by company or role"
        />
      </div>

      <div className="applications-filter-pills">
        {statusFilters.map((filter, index) => (
          <button
            key={filter}
            className={
              index === 0
                ? "applications-filter-pill active"
                : "applications-filter-pill"
            }
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
