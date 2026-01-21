export default function Experience({ item }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-semibold">{item.org}</h3>
          <span className="text-sm text-zinc-600">— {item.role}</span>
        </div>
        <span className="text-xs text-zinc-500">{item.meta}</span>
      </div>

      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
