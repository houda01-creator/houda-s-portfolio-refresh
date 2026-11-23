import { ArrowUpRight, Mail, Phone } from "lucide-react";
import {
  about,
  certifications,
  education,
  engagementStats,
  engagements,
  experiences,
  hobbies,
  languages,
  philosophy,
  pillars,
  profile,
  projects,
} from "@/data/portfolio";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {intro && <p className="mt-5 text-lg text-ink-soft">{intro}</p>}
    </Reveal>
  );
}

export function Philosophy() {
  return (
    <section id="philosophie" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="Ma philosophie" title={philosophy.title} />
        </div>
        <div className="space-y-6 lg:col-span-7">
          <Reveal delay={100}>
            <blockquote className="border-l-2 border-primary pl-6 font-display text-3xl italic leading-snug">
              « {philosophy.quote} »
            </blockquote>
          </Reveal>
          {philosophy.body.map((p, i) => (
            <Reveal key={i} delay={200 + i * 100}>
              <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projets" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Projets à la une"
          title="Ce que j'ai construit, chiffré, défendu."
          intro="Une sélection de dossiers, avec des résultats vérifiables."
        />
        <div className="mt-16 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={60}>
              <article className="card-soft card-hover grid gap-8 p-8 md:p-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-5xl italic text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-medium">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.context}</p>
                  <p className="mt-5 font-display text-xl italic text-ink-soft">{p.hook}</p>
                  {p.link && (
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline mt-5 inline-flex items-center gap-1 text-sm text-primary"
                    >
                      {p.link.label} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5">
                  <div>
                    <p className="eyebrow !text-muted-foreground">Le défi</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.challenge}</p>
                  </div>
                  <div>
                    <p className="eyebrow !text-muted-foreground">L'exécution</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.execution}</p>
                  </div>
                </div>
                <div className="rounded-xl bg-accent/60 p-6 lg:col-span-3">
                  <p className="eyebrow">L'impact</p>
                  <p className="mt-3 font-display text-4xl font-medium text-foreground">{p.impactValue}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.impact}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({
  items,
}: {
  items: { period: string; title: string; sub: string; tag?: string | undefined; body: string }[];
}) {
  return (
    <ol className="relative mt-14 space-y-12 border-l border-border pl-8 md:pl-12">
      {items.map((it, i) => (
        <Reveal as="li" key={it.title} delay={i * 100} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background md:-left-[calc(3rem+5px)]" />
          <p className="text-sm font-medium text-primary">{it.period}</p>
          <h3 className="mt-1 text-2xl font-medium md:text-3xl">{it.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {it.sub}
            {it.tag && <span className="chip ml-3 !py-0.5">{it.tag}</span>}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{it.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Expériences professionnelles" title="Ce que le terrain m'a appris." />
        <Timeline
          items={experiences.map((e) => ({ period: e.period, title: e.title, sub: e.company, tag: e.type, body: e.body }))}
        />
      </div>
    </section>
  );
}

export function Engagement() {
  return (
    <section id="engagements" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div aria-hidden="true" className="glow-blob parallax absolute -right-40 top-10 h-[30rem] w-[30rem] opacity-30" style={{ "--speed": "-0.12" } as React.CSSProperties} />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Leadership & terrain</p>
          <h2 className="section-title mt-4">Engagement associatif</h2>
          <p className="mt-5 text-lg text-background/70">
            Gérer des équipes, structurer des projets à impact social et pitcher sous contrainte.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {engagementStats.map((s) => (
            <div key={s.label} className="bg-foreground p-8">
              <p className="font-display text-6xl text-primary">
                <CountUp figure={s} />
              </p>
              <p className="mt-2 text-sm text-background/70">{s.label}</p>
            </div>
          ))}
          <div className="bg-foreground p-8">
            <p className="font-display text-6xl text-primary">½</p>
            <p className="mt-2 text-sm text-background/70">Finale nationale Enactus</p>
          </div>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 120}>
              <p className="text-sm font-medium text-primary">{e.period}</p>
              <h3 className="mt-1 text-2xl font-medium">{e.title}</h3>
              <p className="mt-1 text-sm text-background/60">{e.org}</p>
              <p className="mt-4 leading-relaxed text-background/80">{e.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <section id="competences" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Matrice de compétences" title="Mes piliers d'intervention" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="card-soft card-hover h-full p-8">
                <p className="font-display text-lg italic text-primary">Pilier {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-3xl font-medium">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="parcours" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Parcours académique" title="Formations & diplômes" />
        <Timeline
          items={education.map((e) => ({ period: e.period, title: e.title, sub: e.school, tag: e.note, body: e.body }))}
        />
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Apprentissage continu"
          title="Certifications & académie"
          intro="Méthodologies d'innovation, entrepreneuriat et validation business."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card-soft card-hover group flex h-full flex-col p-6"
              >
                <p className="text-xs text-muted-foreground">
                  {c.org} · {c.date} 2026
                </p>
                <h3 className="mt-2 text-2xl font-medium leading-tight">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{c.body}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span key={t} className="chip !text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Profile() {
  return (
    <section id="profil" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Fiche profil</p>
          <h2 className="section-title mt-4">
            {profile.firstName} <span className="italic text-primary">{profile.lastName}</span>
          </h2>
          <p className="mt-3 text-ink-soft">{profile.role}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            MSc Business Développement & Digital Marketing · EDC Paris Business School. Recherche d'alternance ou de stage de 6 mois à partir de
            décembre 2026.
          </p>
        </Reveal>
        <div className="space-y-10 lg:col-span-7">
          <Reveal delay={100}>
            <h3 className="text-2xl font-medium">À propos</h3>
            <p className="mt-3 font-display text-2xl italic leading-snug text-ink-soft">{about}</p>
          </Reveal>
          <Reveal delay={180}>
            <h3 className="text-2xl font-medium">Langues</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {languages.map((l) => (
                <div key={l.label} className="card-soft p-4">
                  <span className="text-2xl">{l.flag}</span>
                  <p className="mt-2 font-medium">{l.label}</p>
                  <p className="text-xs text-muted-foreground">{l.level}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={260}>
            <h3 className="text-2xl font-medium">Hors cadre</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span key={h.label} className="chip !px-4 !py-2 !text-sm">
                  <span className="mr-2">{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden="true" className="glow-blob float-slow absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2" />
      <Reveal className="container-page relative text-center">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title mx-auto mt-4 max-w-3xl">Un dossier à défendre ou un projet à structurer ?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
          Parlons de votre alternance ou de votre stage de 6 mois.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="btn-ghost">
            <Phone className="h-4 w-4" /> {profile.phoneDisplay}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p className="font-display text-lg text-foreground">
          {profile.firstName} <span className="italic text-primary">{profile.lastName}</span>
        </p>
        <p>Portfolio 2026 · {profile.role}</p>
      </div>
    </footer>
  );
}
