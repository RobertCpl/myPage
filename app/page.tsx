import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Projects } from "@/components/project";
import { Blog } from "@/components/blog";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <main className="font-sans" id="home">
      {/* Sekcja Hero */}
      <Hero />
      {/* Sekcja About */}
      <About />
      {/* Sekcja Services */}
      <Services />
      {/* Sekcja Projects */}
      <Projects />
      {/* Sekcja Blog */}
      <Blog />
      {/* Sekcja Kontakt */}
      <ContactSection />
    </main>
  );
}
