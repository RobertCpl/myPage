import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center"
      style={{
        backgroundImage: "url('/hero/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1200px] px-4 py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Lewa kolumna – tytuł i podtytuł */}
          <div className="space-y-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-200">
              Frontend Developer, system administrator
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Buduję nowoczesne, szybkie i przejrzyste aplikacje webowe.
            </h1>
            <p className="max-w-xl text-base text-zinc-100/80 md:text-lg">
              Pomagam firmom i klientom indywidualnym przenosić ich pomysły do
              świata online. Skupiam się na wydajności, użyteczności i
              estetycznym designie.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* <Button size="lg">
                Zobacz portfolio
              </Button> */}
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-[#ff5f45] text-white hover:bg-white/20"
              >
                <a href="#contact" className="scroll-smooth">
                  Skontaktuj się
                </a>
              </Button>
            </div>
          </div>

          {/* Prawa kolumna – zdjęcie */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_18px_50px_rgba(15,23,42,0.65)] backdrop-blur">
              <Image
                src="/hero/ja.jpeg"
                alt="Robert Ciepliński"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 400px, 70vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


