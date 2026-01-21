export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-14">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-zinc-900" />
      </div>
      {children}
    </section>
  );
}
