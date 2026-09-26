export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="FitLog Logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="font-display font-bold tracking-widest">FITLOG</span>
        </div>
        <p className="text-xs text-muted text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

