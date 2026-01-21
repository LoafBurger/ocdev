export default function ProjectCard({ p }) {
  return (
    <div
      className={[
        "group rounded-2xl border border-zinc-200 bg-white p-5 transition",
        p.featured ? "hover:-translate-y-0.5 hover:bg-zinc-50" : "bg-zinc-50 hover:bg-zinc-100",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{p.subtitle}</p>
        </div>

        <div className="text-xs text-zinc-500 opacity-0 transition group-hover:opacity-100">
          open →
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-700">{p.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stats.map((s) => (
          <span
            key={s}
            className="rounded-full bg-white px-3 py-1 text-xs text-zinc-700 ring-1 ring-zinc-200"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs text-zinc-500">
            #{t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 text-sm">
        <a
          href={p.href}
          className="rounded-xl bg-zinc-950 px-3 py-2 text-white hover:bg-zinc-900"
        >
          Live
        </a>
        <a
          href={p.repo}
          className="rounded-xl border border-zinc-200 px-3 py-2 hover:bg-zinc-50"
        >
          Code
        </a>
      </div>
    </div>
  );
}
