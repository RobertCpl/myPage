import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Sekcja Hero */}
      <Hero />
      {/* Sekcja About */}
      <About />
    </main>
  );
}
