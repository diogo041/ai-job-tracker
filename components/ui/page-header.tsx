type PageHeaderProps = {
  kicker: string;
  title: string;
  description: string;
  secondaryActionLabel?: string;
  primaryActionLabel?: string;
};

export function PageHeader({
  kicker,
  title,
  description,
  secondaryActionLabel,
  primaryActionLabel,
}: PageHeaderProps) {
  return (
    <section className="page-header">
      <div>
        <p className="dashboard-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="page-header-text">{description}</p>
      </div>

      <div className="page-header-actions">
        {secondaryActionLabel ? (
          <button className="dashboard-secondary-button">
            {secondaryActionLabel}
          </button>
        ) : null}

        {primaryActionLabel ? (
          <button className="dashboard-primary-button">
            {primaryActionLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
}
