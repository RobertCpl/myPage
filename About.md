## Plan sekcji About

### Cel sekcji

- **Cel**: Przedstawić zwięzły opis osoby / marki w sekcji "O mnie" w układzie dwóch kolumn.
- **Spójność**: Użyć tych samych zasad maksymalnej szerokości, paddingów i marginesów co w sekcjach `Hero` i `Header` (kontener do ~1200–1280px, wyśrodkowany, sensowne odstępy pionowe).

---

### Ogólny układ sekcji

- **Struktura ogólna**:
  - Zewnętrzny element: `section` z `id="about"`.
  - Wewnątrz: główny kontener z maksymalną szerokością (np. `max-w-[1200px]` / `max-w-5xl`) wyśrodkowany przez `margin: 0 auto`.
  - Poziome paddingi spójne z innymi sekcjami (np. `px-4` na mobile, `px-6`–`px-8` na desktop, jak w `Header`/`Hero`).
  - Pionowe odstępy: wyraźna sekcja, np. `py-16`–`py-20` na desktop, `py-12` na mobile.
- **Dwie kolumny**:
  - **Lewa kolumna**: zdjęcie/autorski portret.
  - **Prawa kolumna**: mały nagłówek + akapit(y) tekstu.

---

### Wersja desktop (≥ 1024px)

- **Kontener kolumn**:
  - Użycie `display: grid` lub `flex`:
    - Grid: `grid-cols-2`, `gap-8`–`gap-12`.
    - Lub flex: `flex`, `gap-8`, `items-center`.
  - Maksymalna szerokość jak w `Hero` i `Header` (około 1200–1280px), wyśrodkowana.
- **Lewa kolumna – zdjęcie**:
  - Kontener obrazka:
    - Szerokość ok. 45–50% dostępnej przestrzeni.
    - Użycie `next/image` dla wydajności.
    - Stałe proporcje (np. `aspect-[4/5]` lub `aspect-square`).
  - Styl:
    - Zaokrąglone rogi (np. `rounded-xl`).
    - Delikatny cień (`shadow-lg`) i/lub cienka ramka (`border`, `border-border`).
    - Obraz wyrównany pionowo do środka sekcji (`items-center`).
- **Prawa kolumna – nagłówek i tekst**:
  - Zawartość:
    - Mały nagłówek (np. `h2` lub `h3`) typu: "O mnie", "Kim jestem".
    - 1–3 akapity tekstu opisowego (krótkie akapity, max 70–80 znaków w linii).
  - Styl:
    - Nagłówek: rozmiar mniejszy niż główny `Hero`, np. `text-2xl`–`text-3xl`, `font-semibold`.
    - Tekst: `text-base`–`text-lg`, wygodna wysokość linii (`leading-relaxed`).
    - Maksymalna szerokość tekstu: ok. 560–640px dla lepszej czytelności.
  - Odstępy:
    - Odstęp między nagłówkiem a tekstem: np. `mt-4`.
    - Między akapitami: np. `space-y-3`–`space-y-4`.

---

### Wersja mobile (< 768px)

- **Układ kolumn**:
  - Przełączenie na jednokolumnowy layout:
    - Stack: najpierw zdjęcie, pod nim nagłówek i tekst.
    - Możliwe alternate: najpierw nagłówek + tekst, pod spodem zdjęcie – do wyboru przy implementacji, ważna spójność z resztą strony.
  - Implementacja np. poprzez klasy:
    - `flex flex-col` lub `grid grid-cols-1`.
    - `gap-8` między elementami.
- **Zdjęcie na mobile**:
  - Szerokość: prawie pełna szerokość kontenera (np. `w-full`, max width np. `max-w-sm` i `mx-auto`).
  - Zachowanie aspektu (`aspect-[4/5]`), zaokrąglone rogi, cień – jak na desktop, tylko dostosowane do szerokości ekranu.
- **Nagłówek i tekst na mobile**:
  - Nagłówek wycentrowany lub wyrównany do lewej (spójnie z resztą projektu).
  - Tekst zachowuje dobre czytanie na małych ekranach:
    - Rozmiar czcionki `text-base`–`text-[15px]`.
    - Odpowiednie marginesy boczne dzięki `px-4`.
  - Odstępy pionowe zwiększone, aby sekcja "oddychała" (`py-12`, `gap-6`–`gap-8`).

---

### Spójność z istniejącymi sekcjami (Hero, Header)

- **Maksymalna szerokość**:
  - Stosować tę samą wartość co w `Hero` i `Header` (np. `max-w-5xl` / ~1200–1280px).
- **Poziome paddingi**:
  - Te same klasy/utilsy, które są używane w `Hero` i `Header` (np. `px-4` na mobile, `px-6`–`px-8` na większych ekranach).
- **Typografia**:
  - Korzystać z tej samej czcionki co reszta projektu (`globals.css`).
  - Hierarchia nagłówków powinna być spójna: About nie konkuruje rozmiarem z `Hero`.

---

### Plan treści (copywriting)

- **Nagłówek**:
  - Krótki, maks. 3–4 słowa, np. "O mnie", "Poznaj mnie", "Kim jestem".
- **Tekst główny**:
  - 2–3 akapity opisujące:
    - Kim jesteś (rola, specjalizacja).
    - Jak pracujesz / Twoje wartości.
    - Co oferujesz i dla kogo.
  - Język prosty, konkretny, 1–2 zdania na akapit.

---

### Kroki implementacyjne (po akceptacji)

1. **Dokument z planem**:
   - Utworzyć plik `newstack/About.md` i zapisać w nim powyższy plan sekcji (opis UX + layout + treść).

2. **Komponent sekcji About**:
   - Utworzyć komponent `About` (np. w `newstack/components/about.tsx`) implementujący opisany układ dla desktop i mobile, korzystając z istniejących utili i klas layoutu.

3. **Integracja na stronie głównej**:
   - Zaimportować i wstawić `About` do `newstack/app/page.tsx` we właściwym miejscu (pod `Hero`, przed kolejnymi sekcjami).

4. **Dopasowanie stylów**:
   - Drobne korekty spacingu / responsywności, aby sekcja dobrze współgrała z `SiteHeader` i `Hero`.


