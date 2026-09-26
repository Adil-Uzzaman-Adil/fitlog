export default function LibrarySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="bg-surface rounded-2xl overflow-hidden border border-border animate-pulse"
        >
          <div className="aspect-[16/10] bg-surface2" />
          <div className="p-4 space-y-3">
            <div className="h-3 w-16 bg-surface2 rounded" />
            <div className="h-4 w-3/4 bg-surface2 rounded" />
            <div className="h-3 w-1/2 bg-surface2 rounded" />
            <div className="h-3 w-2/3 bg-surface2 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}