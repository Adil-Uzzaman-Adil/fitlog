export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-10 animate-pulse">
        <div className="aspect-square bg-surface rounded-2xl" />
        <div className="space-y-4">
          <div className="h-10 w-3/4 bg-surface rounded" />
          <div className="h-4 w-full bg-surface rounded" />
          <div className="h-4 w-5/6 bg-surface rounded" />
          <div className="h-40 w-full bg-surface rounded-xl mt-8" />
        </div>
      </div>
    </div>
  );
}