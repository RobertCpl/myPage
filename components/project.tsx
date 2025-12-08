import Image from "next/image";

export function Projects() {
  return (
    <section
      id="portfolio"
      className="flex w-full justify-center bg-background"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-20">
        {/* Nagłówek sekcji */}
        <div className="mb-12 space-y-4 text-center">
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            Projekt
          </h2>
          <p className="mx-auto max-w-[640px] text-sm text-muted-foreground md:text-base leading-relaxed">
            Wybrany projekt, w których łączę frontend, backend i administrację
            systemów, aby dostarczać kompletne rozwiązania od A do Z.
          </p>
        </div>

        {/* Dwukolumnowy układ „gazety” */}
        <div className="grid w-full items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Lewa kolumna – z tytułem */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl font-semibold md:text-2xl">
              System do zarządzania magazynem
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground md:text-base leading-relaxed">
              <p className="max-w-[640px]">
                Projekt panelu administracyjnego dla aplikacji SaaS, w którym
                klient może zarządzać treściami, użytkownikami oraz dostępami w
                jednym, spójnym miejscu. Interfejs został zaprojektowany tak,
                aby był prosty w obsłudze nawet dla osób nietechnicznych.
              </p>
              <p className="max-w-[640px]">
                <span className="relative float-left mr-4 mb-2 inline-block overflow-hidden rounded-xl border border-border/60 bg-muted/40 shadow-md">
                  {/* <Image
                    src="/window.svg"
                    alt="Podgląd panelu administracyjnego"
                    width={20}
                    height={96}
                    className="h-auto w-full max-w-44 object-contain"
                  /> */}
                </span>
                Backend oparty o Strapi i PostgreSQL pozwala szybko definiować
                nowe typy danych oraz relacje między nimi, a Next.js zapewnia
                szybki frontend z renderowaniem po stronie serwera. Całość
                uruchomiona jest w kontenerach Docker, co ułatwia wdrażanie
                zmian i utrzymanie spójnych środowisk.
              </p>
              <p className="max-w-[640px]">
                Dzięki spójnemu podejściu do architektury systemu, nowa wersja
                panelu uprościła codzienną pracę zespołu, skracając czas
                potrzebny na zarządzanie danymi i minimalizując ryzyko błędów
                wynikających z ręcznych operacji.
              </p>
            </div>
          </div>

          {/* Prawa kolumna – bez nagłówka, druga kolumna tekstu */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-3 text-sm text-muted-foreground md:text-base leading-relaxed">
              <p className="max-w-[640px]">
                <span className="relative float-right ml-4 mb-2 inline-block overflow-hidden rounded-xl border border-border/60 bg-muted/40 shadow-md">
                  {/* <Image
                    src="/hero/ja.jpeg"
                    alt="Schemat infrastruktury i monitoringu"
                    width={144}
                    height={96}
                    className="h-auto w-full max-w-44 object-cover"
                  /> */}
                </span>
                Równolegle rozwijany był system monitoringu i utrzymania
                serwerów, który pozwala śledzić stan usług, obciążenie
                infrastruktury oraz reagować na problemy zanim wpłyną one na
                użytkowników końcowych. Wykorzystuję tu narzędzia znane z
                ekosystemu Linux oraz własne skrypty automatyzujące rutynowe
                zadania.
              </p>
              <p className="max-w-[640px]">
                Regularne backupy baz danych, kontrola logów oraz alerty
                skonfigurowane pod kluczowe wskaźniki sprawiają, że środowisko
                produkcyjne pozostaje stabilne nawet przy rosnącym ruchu i
                kolejnych wdrożeniach. Dzięki temu zespół może skupić się na
                rozwoju produktu zamiast gaszenia pożarów.
              </p>
              <p className="max-w-[640px]">
                Połączenie kompetencji developerskich i administracyjnych
                pozwala mi patrzeć na projekt całościowo – od warstwy
                interfejsu, przez backend i integracje, aż po infrastrukturę i
                procesy utrzymaniowe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


