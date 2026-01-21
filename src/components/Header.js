export default function Header({ compact }) {
  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all",
        compact ? "border-zinc-200 bg-white/80 backdrop-blur" : "border-transparent bg-white/0",
      ].join(" ")}
    >
      <div className={["mx-auto max-w-5xl px-5 transition-all", compact ? "py-3" : "py-5"].join(" ")}>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="rounded-xl bg-zinc-950 px-2 py-1 text-xs font-semibold tracking-wide text-white">
              OC
            </span>
            <span className="text-sm font-medium text-zinc-900">Oliver Cheung</span>

            {compact && (
              <span className="ml-2 hidden rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 sm:inline">
                currently shipping ✅
              </span>
            )}
          </div>

          <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex">
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-100" href="#projects">Projects</a>
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-100" href="#experience">Experience</a>
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-100" href="#about">About</a>
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-100" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
