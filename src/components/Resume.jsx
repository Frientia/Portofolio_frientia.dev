"use client";

import { resume } from "../lib/content";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, PillButton, ICONS } from "./ui/Bits";

export default function Resume() {
  const { Download, Award, GraduationCap, Briefcase } = ICONS;

  return (
    <section id="resume" className="relative scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal className="mb-6">
          <FigLabel fig={resume.fig} title={resume.figTitle} />
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <MaskHeading as="h2" lines={resume.heading} className="display-section text-ink" />
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-base leading-relaxed text-ink-soft">{resume.intro}</p>
            <div className="mt-5">
              <PillButton
                href={resume.cvFile}
                download
                icon={Download}
                ariaLabel="Unduh CV dalam format PDF"
              >
                {resume.cvLabel}
              </PillButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8 max-w-2xl">
          <p className="text-base leading-relaxed text-ink-soft">{resume.about}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-12 px-5 pb-24 md:mt-16 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pb-32">
        <div>
          <Reveal className="mb-6 flex items-center gap-2">
            <Briefcase size={18} className="text-accent" aria-hidden />
            <h3 className="font-display text-xl uppercase text-ink">Pengalaman Relevan</h3>
          </Reveal>

          <ol className="relative space-y-10 border-l border-ink/10 pl-6">
            {resume.experience.map((exp) => (
              <Reveal as="li" key={exp.role} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                />
                <p className="font-mono-label text-accent">{exp.period}</p>
                <h4 className="mt-1 text-lg font-semibold text-ink md:text-xl">{exp.role}</h4>
                <p className="font-mono-label mt-1 text-ink-soft">{exp.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mb-6 mt-12 flex items-center gap-2">
            <GraduationCap size={18} className="text-accent" aria-hidden />
            <h3 className="font-display text-xl uppercase text-ink">Pendidikan</h3>
          </Reveal>

          {resume.education.map((ed) => (
            <Reveal key={ed.title} className="rounded-2xl border border-ink/10 bg-card p-5">
              <p className="font-mono-label text-accent">{ed.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-ink">{ed.title}</h4>
              <p className="font-mono-label mt-1 text-ink-soft">{ed.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{ed.note}</p>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal className="mb-6 flex items-center gap-2">
            <ICONS.Code2 size={18} className="text-accent" aria-hidden />
            <h3 className="font-display text-xl uppercase text-ink">Kemampuan</h3>
          </Reveal>

          <Reveal className="divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-card">
            {resume.skills.map(([label, value]) => (
              <div key={label} className="px-5 py-3.5">
                <p className="font-mono-label text-ink-soft">{label}</p>
                <p className="mt-1 text-sm font-medium text-ink">{value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mb-6 mt-12 flex items-center gap-2">
            <Award size={18} className="text-accent" aria-hidden />
            <h3 className="font-display text-xl uppercase text-ink">Sertifikat</h3>
          </Reveal>

          <ul className="space-y-3">
            {resume.certificates.map((c) => (
              <Reveal
                as="li"
                key={c}
                className="flex items-start gap-3 rounded-xl border border-ink/10 bg-card px-4 py-3 text-sm text-ink"
              >
                <Award size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {c}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

