import { describe, expect, it } from "vitest";

import { certifications } from "@/data/portfolio";

describe("Certifications", () => {
  it("la certification GIZ DataCipation est listée avec son code de vérification", () => {
    const giz = certifications.find((c) => c.org === "GIZ DataCipation");
    expect(giz).toBeDefined();
    expect(giz?.title).toBe("The African Data Economy in the Global Context");
    expect(giz?.date).toBe("nov.");
    expect(giz?.code).toBe("6777329865HE");
  });

  it("chaque certification a un organisme, un titre, un descriptif et des étiquettes", () => {
    for (const c of certifications) {
      expect(c.org.length).toBeGreaterThan(0);
      expect(c.title.length).toBeGreaterThan(0);
      expect(c.body.length).toBeGreaterThan(0);
      expect(c.tags.length).toBeGreaterThan(0);
    }
  });

  it("une certification sans lien de partage porte un code de vérification", () => {
    for (const c of certifications) {
      if (!c.href) expect((c.code ?? "").length).toBeGreaterThan(0);
    }
  });
});
