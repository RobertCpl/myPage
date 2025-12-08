## Cel sekcji

- **Cel**: Zaprezentować wybrane projekty/realizacje w formie estetycznej sekcji portfolio przypominającej układ gazety – z dwoma kolumnami tekstu i małymi zdjęciami otoczonymi tekstem.
- **Spójność**: Użyć tego samego kontenera (`max-w-[1200px]`), paddingów (`px-4 py-16`, `lg:py-20`) oraz hierarchii nagłówków i typografii co w istniejących sekcjach.
- **Akcent wizualny**: Zamiast dużych kart projektów zastosować **lżejszy, „prasowy” układ** – dwa bloki tekstu (kolumny) z wplecionymi małymi obrazkami (jak ilustracje w artykule), wokół których owija się tekst.

---

## Struktura treści sekcji Project

- **Nagłówek sekcji (wyśrodkowany)**
  - Tytuł sekcji w UI: **„Projekty”** (lub „Wybrane projekty” – zmiana copy nie wpływa na layout).
  - Podtytuł (lead), 1–2 zdania, wyśrodkowany tekst z klasami w stylu:
    - `text-muted-foreground`, `max-w-[640px]`, `mx-auto`, `leading-relaxed`.
  - Przykładowy lead:
    - „Wybrane projekty, przy których łączę frontend, backend i administrację systemów, aby dowozić kompletne i stabilne rozwiązania.”

- **Dwukolumnowy blok tekstu z efektami „gazety”**
  - Cały blok umieszczony pod nagłówkiem w jednym kontenerze (`grid`), w którym znajdują się **dwie kolumny tekstu**.
  - **Lewa kolumna**:
    - Zawiera **tytuł artykułu/projektu** (np. nazwa projektu) oraz dłuższy tekst opisu.
    - W treść wpleciona jest **mała ilustracja projektu** (np. zrzut ekranu) wyrównana do lewej, tak aby kolejne akapity tekstu „owijały” obrazek.
  - **Prawa kolumna**:
    - **Bez własnego tytułu** – nagłówek pojawia się tylko w lewej kolumnie; prawa kolumna jest kontynuacją/oddzielnym tekstem w klimacie gazety.
    - W treść również wpleciona jest **mała ilustracja**, ale wyrównana do prawej, tak aby otaczał ją tekst z lewej strony.

- **Elementy tekstowe w kolumnach**
  - **Lewa kolumna**:
    - Krótki tytuł projektu (np. „Panel administracyjny dla aplikacji SaaS”).
    - 2–4 akapity opisujące kontekst, technologię i efekty.
    - Pomiędzy akapitami spójne odstępy (`space-y-3`–`space-y-4`).
  - **Prawa kolumna**:
    - Sam tekst (bez nagłówka), stylizowany jak druga kolumna artykułu.
    - 2–4 akapity opisujące inny projekt lub rozszerzające historię (np. administracja systemów, monitoring, utrzymanie).

- **Małe zdjęcia „otoczone tekstem”**
  - W każdej kolumnie obrazek jest **niewielki**:
    - Szerokość rzędu `w-28`–`w-36` (ok. 110–150px), proporcje np. `aspect-square` lub `aspect-[4/3]`.
    - Zaokrąglone rogi (`rounded-xl`), cienka ramka (`border border-border/60`), delikatny cień (`shadow-md`).
  - Efekt „gazety” uzyskujemy poprzez:
    - Użycie klas typu `float-left` + `mr-4 mb-2` dla obrazu w lewej kolumnie.
    - Użycie klas typu `float-right` + `ml-4 mb-2` dla obrazu w prawej kolumnie.
    - Tekst akapitów (tagi `p`) umieszczony po obrazie w DOM, tak aby automatycznie opływał grafikę.

---

## Layout i styl – desktop (≥ 1024px)

- **Sekcja zewnętrzna**
  - `section` z `id="projects"` (lub `id="project"`, ważna konsekwencja z nawigacją), z klasami spójnymi z `About`/`Services`:
    - `className="flex w-full justify-center bg-background"`.
  - Wewnątrz kontener:
    - `div` z `className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-20"`.

- **Nagłówek sekcji**
  - Wrapper nagłówka:
    - `div` z `className="mb-12 space-y-4 text-center"`.
  - Tytuł:
    - `h2` z klasami: `text-2xl font-semibold tracking-tight md:text-3xl` (jak w `Services`/`About`).
  - Lead:
    - `p` z klasami: `mx-auto max-w-[640px] text-sm text-muted-foreground md:text-base leading-relaxed`.

- **Dwukolumnowy kontener tekstu**
  - Użycie `grid`, podobnie jak w `About`:
    - `div` z `className="grid w-full items-start gap-10 lg:grid-cols-2 lg:gap-12"`.
  - **Lewa kolumna**:
    - Wrapper: `div` z `className="space-y-4 lg:space-y-6"`.
    - W środku:
      - Tytuł artykułu/projektu (`h3`) z klasami `text-xl font-semibold md:text-2xl`.
      - Blok tekstu z akapitami (`div` z `space-y-3 text-sm text-muted-foreground md:text-base leading-relaxed`).
      - W jednym z pierwszych akapitów osadzony mały obraz z klasami float (`float-left mr-4 mb-2`).
  - **Prawa kolumna**:
    - Wrapper: `div` z `className="space-y-4 lg:space-y-6"`, **bez nagłówka**.
    - W środku:
      - Blok tekstu z akapitami (jak wyżej), ale z małym obrazem wklejonym wewnątrz pierwszego/drugiego akapitu z klasami `float-right ml-4 mb-2`.

- **Obrazy technicznie**
  - Użycie `next/image` dla obu ilustracji:
    - Kontener może być prosty (bez pełnego `aspect-5/4`, bo to małe elementy): np. `relative inline-block` z określoną szerokością.
    - Dla zachowania responsywności można użyć atrybutów `width`/`height` (np. `width={144} height={96}`) zamiast `fill`.

---

## Layout i styl – mobile (< 768px)

- **Stackowanie kolumn**
  - Na małych ekranach grid przechodzi w jedną kolumnę:
    - `grid` domyślnie `grid-cols-1`, `gap-8`–`gap-10`.
    - Najpierw cały tekst z lewej kolumny (z obrazkiem `float-left`), potem prawa kolumna (z obrazkiem `float-right`).
  - Opcjonalnie na bardzo małych szerokościach można nadpisać float w CSS (np. `float-none`, `mx-auto`) jeśli układ z opływaniem zbyt się „łamie” – do rozważenia przy implementacji.

- **Obraz i tekst na mobile**
  - Obrazki pozostają małe, ale mogą być centrowane na mobile, jeśli float pogarsza czytelność:
    - Dodatkowa klasa responsywna, np. `sm:float-left` / `sm:float-right` w zależności od breakpointów.
  - Tekst zachowuje spójny styl (`text-sm`–`text-base`, `leading-relaxed`, `px-4` dla sekcji).

---

## Propozycja treści

- **Nagłówek sekcji**
  - Tytuł: „Projekty”.
  - Lead (przykład):
    - „Wybrane projekty, w których łączę frontend, backend i administrację systemów, aby dostarczać kompletne rozwiązania od A do Z.”

- **Lewa kolumna – artykuł z tytułem**
  - Tytuł: „Panel administracyjny dla aplikacji SaaS”.
  - Krótki wstęp (nad obrazkiem):
    - 1–2 zdania wprowadzające projekt.
  - Akapit z małym obrazem (w środku tekstu):
    - Pierwsze zdanie opisu + wstawiona ilustracja (`float-left mr-4 mb-2`) – np. miniatura panelu.
  - Dalsze akapity (pod obrazem):
    - Opis technologii (Next.js, Strapi, PostgreSQL, Docker).
    - Efekt dla klienta (łatwiejsze zarządzanie, centralizacja danych).

- **Prawa kolumna – druga kolumna tekstu bez nagłówka**
  - Tekst (bez tytułu) opisujący np. drugi projekt lub aspekt administracji systemów:
    - W pierwszym akapicie wpleciony mały obraz (`float-right ml-4 mb-2`) – np. schemat infrastruktury.
    - Kolejne akapity rozwijają wątek: monitoring, backupy, utrzymanie serwerów.

---

## Implementacja techniczna

- Utworzyć komponent sekcji `Project`/`Projects` w `newstack/components/project.tsx` zgodnie z powyższym opisem.
- Zintegrować sekcję w `newstack/app/page.tsx` pod sekcją `Services`, zachowując spójną kolorystykę i typografię.


