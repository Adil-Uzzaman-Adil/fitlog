export default function PlanTabs({ active, onChange, planCount, savedCount }) {
  const tabs = [
    { id: "plan", label: `TODAY'S PLAN (${planCount})` },
    { id: "saved", label: `SAVED (${savedCount})` },
  ];
  return (
    <div className="flex gap-2 border-b border-border">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-4 py-3 text-xs sm:text-sm font-bold tracking-widest transition border-b-2 -mb-px ${
            active === t.id
              ? "border-accent text-accent"
              : "border-transparent text-muted hover:text-text"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}