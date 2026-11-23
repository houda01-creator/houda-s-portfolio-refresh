import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/portfolio/Hero";
import { Contact, Profile } from "@/components/portfolio/Sections";
import { Route } from "@/routes/index";

// Every place that states what Houda is looking for must name both offers
// (alternance + stage de 6 mois) so recruiters read the same message everywhere.
{
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, "IntersectionObserver", { writable: true, value: IO });
}

const norm = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").toLowerCase();

function headMeta() {
  const head = Route.options.head as unknown as () => { meta: Record<string, string>[] };
  const meta = head().meta;
  const find = (k: string, v: string) => meta.find((m) => m[k] === v)?.["content"];
  return {
    tabTitle: meta.find((m) => "title" in m)?.["title"],
    description: find("name", "description"),
    ogTitle: find("property", "og:title"),
  };
}

function texts() {
  const hero = render(<Hero />);
  const headline = hero.container.querySelector("h1")?.textContent;
  hero.unmount();
  const contact = render(<Contact />);
  const contactText = contact.container.querySelector("#contact p:not(.eyebrow)")?.textContent;
  contact.unmount();
  const profile = render(<Profile />);
  const profileText = Array.from(profile.container.querySelectorAll("p")).find((p) =>
    /recherche/i.test(p.textContent ?? ""),
  )?.textContent;
  profile.unmount();
  return { headline, contactText, profileText, ...headMeta() };
}

describe("Cohérence alternance / stage de 6 mois", () => {
  const all = texts();

  // Wording varies by place (alternance / alternant, stage / stagiaire) but the
  // two offers must always be named together.
  const OFFERS = [
    { label: "alternance", re: /alternan(ce|t)/ },
    { label: "stage de 6 mois", re: /(stage|stagiaire) de 6 mois/ },
  ];

  for (const [name, value] of Object.entries(all)) {
    for (const offer of OFFERS) {
      it(`« ${name} » mentionne ${offer.label}`, () => {
        expect(offer.re.test(norm(value))).toBe(true);
      });
    }
  }

  it("le titre principal, la fiche profil et la description donnent la même date : décembre 2026", () => {
    for (const v of [all.headline, all.profileText, all.description]) {
      expect(norm(v)).toContain("décembre 2026");
    }
  });

  it("le titre de l'onglet et le titre de partage sont identiques", () => {
    expect(all.ogTitle).toBe(all.tabTitle);
  });
});
