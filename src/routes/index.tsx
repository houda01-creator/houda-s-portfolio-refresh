import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { IntroBubble } from "@/components/portfolio/IntroBubble";
import { Nav } from "@/components/portfolio/Nav";
import {
  Certifications,
  Contact,
  Education,
  Engagement,
  Experience,
  Footer,
  Philosophy,
  Pillars,
  Profile,
  Projects,
} from "@/components/portfolio/Sections";

const title = "Houda Es-Seyouri — Business Developer en alternance";
const description =
  "Portfolio de Houda Es-Seyouri, Business Developer & Marketing Digital (MSc EDC Paris), en recherche d'alternance dès septembre 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <IntroBubble />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <Experience />
        <Engagement />
        <Pillars />
        <Education />
        <Certifications />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
