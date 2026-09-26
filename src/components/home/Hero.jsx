import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-accent text-xs tracking-[0.3em] font-bold mb-4">
            WORKOUT LIBRARY
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="text-muted mt-6 max-w-lg text-sm sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition"
          >
            BROWSE WORKOUTS <FiArrowRight />
          </a>
        </div>

        {/* Right image — your banner */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
          <img
            src="/banner.png"
            alt="Gym workout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-bg/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
