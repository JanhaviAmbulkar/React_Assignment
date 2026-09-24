interface Stat {
  label: string;
  value: string;
  description: string;
}

const stats: Stat[] = [
  {
    label: "Customers",
    value: "10K+",
    description: "Businesses connected",
  },
  {
    label: "Messages",
    value: "2M+",
    description: "Messages delivered",
  },
  {
    label: "Automation",
    value: "85%",
    description: "Tasks automated",
  },
  {
    label: "Uptime",
    value: "99.9%",
    description: "Platform reliability",
  },
];

function HeroStats() {
  return (
    <section
      id="features"
      className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-3xl font-extrabold text-indigo-600">
            {stat.value}
          </p>

          <h3 className="mt-2 font-semibold text-slate-900">
            {stat.label}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default HeroStats;