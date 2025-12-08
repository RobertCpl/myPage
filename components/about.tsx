import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="flex w-full justify-center bg-background"
    >
      <div className="mx-auto flex w-full max-w-[1200px] px-4 py-16 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Prawa kolumna – nagłówek i tekst (na mobile u góry) */}
          <div className="order-1 space-y-4 lg:order-2 lg:space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Developer
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground md:text-base leading-relaxed">
              <p className="max-w-[640px]">
                Posiadam solidne umiejętności programistyczne w technologiach
                JavaScript, koncentrując się na tworzeniu nowoczesnych
                aplikacji webowych. Pracuję z{" "}
                <span className="font-semibold">Node.js</span> i{" "}
                <span className="font-semibold">Express.js</span>, budując
                wydajne API oraz backendy oparte na architekturze REST.
              </p>
              <p className="max-w-[640px]">
                Bardzo dobrze znam{" "}
                <span className="font-semibold">Strapi.js</span>, dzięki czemu
                potrafię szybko tworzyć elastyczne headless CMS-y i projektować
                złożone modele danych. Po stronie frontendu korzystam z{" "}
                <span className="font-semibold">Next.js</span> i{" "}
                <span className="font-semibold">React</span>, tworząc szybkie,
                skalowalne i przyjazne użytkownikowi interfejsy.
              </p>
              <p className="max-w-[640px]">
                W pracy stawiam na przejrzystą komunikację, solidną
                architekturę projektu oraz długoterminową współpracę.
                Wierzę, że dobre produkty powstają tam, gdzie technologia
                spotyka się z biznesem i zrozumieniem użytkownika.
              </p>
            </div>
          </div>

          {/* Lewa kolumna – zdjęcie / portret (na mobile pod tekstem) */}
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-5/4 w-full max-w-xl overflow-hidden rounded-3xl border border-border/60 bg-muted/40 shadow-lg">
              <Image
                src="/about/developer.jpg"
                alt="Portret – o mnie"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 80vw"
                priority={false}
              />
            </div>
          </div>

          {/* Drugi wiersz – tekst po lewej, zdjęcie po prawej */}
          <div className="order-3 space-y-4 lg:space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Administrator IT
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground md:text-base leading-relaxed">
              <p className="max-w-[640px]">
                Administuje systemami{" "}
                <span className="font-semibold">Linux</span>. Działania obejmują
                konfigurację, zarządzanie i utrzymanie środowisk serwerowych.
                Pracuję z narzędziami takimi jak{" "}
                <span className="font-semibold">Docker</span>, dzięki czemu
                potrafię tworzyć i utrzymywać kontenery oraz projektować proste
                środowiska oparte o Docker Compose.
              </p>
              <p className="max-w-[640px]">
                W swojej pracy wykorzystuję również{" "}
                <span className="font-semibold">PostgreSQL</span>, dbając o
                konfigurację baz danych, backupy, odtwarzanie danych oraz
                podstawową optymalizację. Swobodnie poruszam się w systemowych
                narzędziach Linux, takich jak systemd, journalctl, netplan, ip,
                iptables, a także zarządzam siecią, usługami oraz użytkownikami.
              </p>
              <p className="max-w-[640px]">
              Dzięki praktycznemu doświadczeniem potrafię diagnozować problemy, analizować logi i utrzymywać stabilne środowiska produkcyjne.
              </p>
            </div>
          </div>

          <div className="order-4 flex justify-center lg:justify-start">
            <div className="relative aspect-5/4 w-full max-w-xl overflow-hidden rounded-3xl border border-border/60 bg-muted/40 shadow-lg">
              <Image
                src="/about/linux.jpg"
                alt="Zdjęcie ilustrujące sposób pracy"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 80vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


