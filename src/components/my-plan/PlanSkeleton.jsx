export default function PlanSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-surface border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-pulse"
        >
          <div className="w-full sm:w-32 aspect-video sm:aspect-square rounded-lg bg-surface2 flex-shrink-0" />
          <div className="flex-1 space-y-3 w-full">
            <div className="h-4 w-1/2 bg-surface2 rounded" />
            <div className="h-3 w-1/3 bg-surface2 rounded" />
            <div className="h-3 w-2/3 bg-surface2 rounded" />
          </div>
          <div className="h-10 w-32 bg-surface2 rounded-md" />
        </div>
      ))}
    </div>
  );
}