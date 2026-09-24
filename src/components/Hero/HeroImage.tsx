function HeroImage() {
  return (
    <div className="mx-auto mt-14 w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-indigo-100">
        {/* Dashboard header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <span className="text-sm font-medium text-slate-500">
            Dashboard Preview
          </span>
        </div>

        {/* Dashboard content */}
        <div className="grid gap-5 bg-slate-50 p-5 sm:grid-cols-3 sm:p-8">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Messages</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              24,580
            </h3>
            <p className="mt-2 text-sm text-green-600">
              +18.5% this month
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active Customers</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              8,420
            </h3>
            <p className="mt-2 text-sm text-green-600">
              +12.3% this month
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Automations</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              156
            </h3>
            <p className="mt-2 text-sm text-indigo-600">
              Running smoothly
            </p>
          </div>

          {/* Chart placeholder */}
          <div className="rounded-xl bg-white p-5 shadow-sm sm:col-span-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">
                Message Activity
              </h3>
              <span className="text-sm text-slate-500">
                Last 7 days
              </span>
            </div>

            <div className="mt-6 flex h-36 items-end gap-3">
              {[45, 70, 55, 90, 65, 100, 80].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-md bg-indigo-500"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;