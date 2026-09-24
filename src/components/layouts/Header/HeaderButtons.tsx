function HeaderButtons() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <button
        type="button"
        className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Login
      </button>

      <button
        type="button"
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
      >
        Get Started
      </button>
    </div>
  );
}

export default HeaderButtons;  