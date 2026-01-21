"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import ProjectCard from "../components/Projects";
import ExperienceItem from "../components/Experience";
import { projects } from "../data/projects";
import { experience } from "../data/experience";

export default function Home() {
  const heroRef = useRef(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setCompact(!entry.isIntersecting),
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const side = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header compact={compact} />

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12px 12px, rgba(0,0,0,.35) 1px, transparent 1px), radial-gradient(circle at 78px 52px, rgba(0,0,0,.25) 1px, transparent 1px)",
            backgroundSize: "170px 170px",
            transform: "rotate(-6deg) scale(1.1)",
          }}
        />
        <div className="mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-5 py-20">
          <p className="text-xs tracking-[0.25em] text-zinc-600">
            SOFTWARE • DATA • PRODUCT
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
            Oliver Cheung
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            I build products people actually use — clean UI, real users, fast iteration.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900"
            >
              See projects
            </a>
            <a
              href="#experience"
              className="rounded-2xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Work experience
            </a>
            <span className="self-center text-xs text-zinc-500">
              (yes, I&apos;m the “make it simple” guy)
            </span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs text-zinc-500">Side quest</p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {side.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Work Experience">
        <div className="space-y-4">
          {experience.map((item) => (
            <ExperienceItem key={`${item.org}-${item.role}`} item={item} />
          ))}
        </div>
      </Section>

      {/* About + Contact */}
      <section className="mx-auto max-w-5xl px-5 py-14" id="about">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <h2 className="text-xl font-semibold tracking-tight">About</h2>
              <div className="h-px flex-1 bg-zinc-900" />
            </div>
            <p className="max-w-prose text-sm leading-relaxed text-zinc-600 md:text-base">
              Data Science + CS builder who likes clean UI, real users, and shipping fast.
              Outside of coding: skateboarding, good food, and making videos.
            </p>
          </div>

          <div id="contact">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
              <div className="h-px flex-1 bg-zinc-900" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-100 hover:bg-zinc-200" href="mailto:you@example.com">✉️</a>
              <a className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-100 hover:bg-zinc-200" href="#">🐙</a>
              <a className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-100 hover:bg-zinc-200" href="#">in</a>
              <a className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-100 hover:bg-zinc-200" href="#">▶︎</a>

              <span className="ml-2 text-xs text-zinc-500">
                links placeholder — you’ll fill these in
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-zinc-500">
          built with next.js • shipped with calm
        </div>
      </section>
    </div>
  );
}
