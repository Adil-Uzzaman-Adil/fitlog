export default function MetricsRow({ metrics }) {
  const items = [
    { label: "Exercises", value: metrics.exercises },
    { label: "Minutes", value: metrics.minutes },
    { label: "Calories", value: metrics.calories },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6 my-8">
      {items.map((m) => (
        <div
          key={m.label}
          className="bg-surface border border-border rounded-xl p-4 sm:p-6 text-center"
        >
          <p className="font-display text-3xl sm:text-4xl font-bold text-text">
            {m.value}
          </p>
          <p className="text-xs sm:text-sm text-muted tracking-widest uppercase mt-1">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}