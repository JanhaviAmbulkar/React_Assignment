function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="#contact"
        className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 sm:w-auto"
      >
        Get Started
        <span className="ml-2" aria-hidden="true">→</span>
      </a>

      <a
        href="#features"
        className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
      >
        Explore Features
      </a>
    </div>
  );
}

export default HeroButtons;