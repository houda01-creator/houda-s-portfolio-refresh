import { ArrowDown, ArrowUpRight } from "lucide-react";
import portraitAsset from "@/assets/houda-portrait.jpeg.asset.json";
import { keyFigures, profile, tools } from "@/data/portfolio";
import { CountUp } from "./CountUp";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Soft ambient bubbles */}
      <div aria-hidden="true" className="glow-blob float-slow absolute -right-32 -top-24 h-[34rem] w-[34rem]" />
      <div aria-hidden="true" className="glow-blob float-slower absolute -left-40 top-[60%] h-[22rem] w-[22rem] opacity-60" />

      <div className="container-page relative grid items-center gap-14 pb-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="rise flex flex-wrap items-center gap-3" style={d(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-ink-soft">
              <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
              Disponible · {profile.school}
            </span>
          </div>

          <p className="rise mt-8 font-display text-2xl italic text-muted-foreground" style={d(80)}>
            {profile.firstName} {profile.lastName}
          </p>

          <h1 className="mt-2 text-[clamp(2.6rem,6.2vw,5rem)] font-medium leading-[1.02]">
            <span className="rise block" style={d(160)}>
              Business Developer
            </span>
            <span className="rise block" style={d(280)}>
              en{" "}
              <span className="relative inline-block italic text-primary">
                alternance
                <span className="underline-draw absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary/60" />
              </span>
            </span>
            <span className="rise block" style={d(400)}>
              dès septembre 2026.
            </span>
          </h1>

          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft" style={d(540)}>
            {profile.intro}
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3" style={d(660)}>
            <a href="#projets" className="btn-primary">
              Voir mes projets <ArrowDown className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              M'écrire <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rise lg:col-span-5" style={d(500)}>
          <figure className="relative mx-auto w-full max-w-[21rem]">
            <div aria-hidden="true" className="portrait-echo absolute inset-0 translate-x-4 translate-y-4" />
            <div className="portrait-shell relative">
              <img
                src={portraitAsset.url}
                alt="Portrait de Houda Es-Seyouri"
                width={1920}
                height={1920}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-7 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {profile.firstName} {profile.lastName}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Key figures */}
      <div className="container-page relative pb-20">
        <div className="rise card-soft p-8" style={d(760)}>
          <p className="eyebrow">En quelques chiffres</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-7">
            {keyFigures.map((f, i) => (
              <li key={f.label} className={i === 0 ? "lg:col-span-2" : undefined}>
                <p className={`font-display leading-none ${i === 0 ? "text-5xl" : "text-3xl"}`}>
                  <CountUp figure={f} startDelay={1300 + i * 120} />
                </p>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">
                  {f.label}
                  {i === 0 ? " · B2B & B2C, secteur santé" : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills ribbon */}
      <div className="marquee relative border-y border-border bg-secondary/60 py-5">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-2xl italic text-ink-soft">
              {t}
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
