"use client";

import { contact, profile } from "../lib/content";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, PillButton, ICONS } from "./ui/Bits";

export default function ContactCTA() {
  const waHref = `https://wa.me/${contact.whatsapp}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-24"
    >
      {/* Blob dekoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-mint opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 h-80 w-80 rounded-full bg-peach opacity-50 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <Reveal className="mb-6">
          <FigLabel fig={contact.fig} title={contact.figTitle} />
        </Reveal>

        <MaskHeading
          as="h2"
          lines={contact.heading}
          className="display-hero text-ink"
        />

        <Reveal delay={0.15} className="mt-8 max-w-xl">
          <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
            {contact.statement}
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
          <PillButton href={waHref} external ariaLabel="Chat lewat WhatsApp">
            {contact.cta}
          </PillButton>
          <PillButton href={`mailto:${contact.email}`} variant="outline" icon={ICONS.Mail}>
            Email
          </PillButton>
          <span className="font-mono-label ml-1 inline-flex items-center gap-2 text-ink-soft">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            {profile.availability}
          </span>
        </Reveal>

        {/* Kontak langsung */}
        <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <a
            className="link-sweep text-sm font-medium text-ink"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="link-sweep text-sm font-medium text-ink"
            href={`tel:${contact.phoneRaw}`}
          >
            {contact.phone}
          </a>
          <span className="font-mono-label inline-flex items-center gap-1 self-center text-ink-soft">
            <ICONS.MapPin size={14} aria-hidden /> {contact.location}
          </span>
        </Reveal>

        {/* Socials */}
        <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
          {contact.socials.map((s) => {
            const Icon = ICONS[s.icon] || ICONS.ArrowUpRight;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                <Icon
                  size={16}
                  className="text-ink-soft transition-colors group-hover:text-accent"
                  aria-hidden
                />
                {s.label}
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
