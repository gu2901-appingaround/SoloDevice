import { homeCopy } from "@/core/copy/home";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-4 py-10 sm:px-8 sm:py-16">
      <section className="w-full rounded-3xl border border-slate-900/10 bg-white/90 p-8 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.5)]">
        <span className="inline-flex rounded-full border border-slate-900/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
          {homeCopy.badge}
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Hello World
        </h1>
        <h2 className="mt-2 text-xl font-semibold text-slate-800">
          {homeCopy.title}
        </h2>
        <p className="mt-3 text-slate-700">{homeCopy.subtitle}</p>
        <button className="mt-6 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
          {homeCopy.cta}
        </button>
      </section>
    </main>
  );
}
