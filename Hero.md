## Plan sekcji Hero

- **Cel**: Sekcja Hero na całą szerokość widocznego obszaru, z zawartością ograniczoną do maks. 1200px.
- **Tło**: Użyć obrazu `public/hero/background.jpg` jako tła całej sekcji (cover, centrowane).
- **Struktura**: Dwie kolumny dla widoku desktop – lewa tekst, prawa zdjęcie.

---

## Krok 1 – Struktura komponentu

- **Komponent**: Utworzyć komponent `Hero` (np. w `components/hero.tsx`).
- **Zewnętrzny wrapper sekcji**:
  - `section` z klasą nadającą tło (`background-image: url('/hero/background.jpg')`).
  - `min-height`: około `100vh` (lub 70–80vh, do decyzji).
- **Kontener wewnętrzny**:
  - `div` z maksymalną szerokością `1200px`, wyrównany do środka (`margin: 0 auto`).
  - Padding poziomy (np. `padding: 0 16px`).
  - Ustawiony jako `display: grid` lub `display: flex` dla dwóch kolumn.

---

## Krok 2 – Kolumna lewa (tytuł + podtytuł)

- **Zawartość**:
  - `h1` – główny tytuł (2–3 linie, mocny, duży font).
  - `p` – podtytuł / krótkie intro (maks. 2–3 zdania).
  - (Opcjonalnie) 1–2 przyciski CTA z użyciem komponentu `Button` z `ui/button.tsx`.
- **Styl**:
  - Maksymalna szerokość tekstu ~560–640px dla lepszej czytelności.
  - Zapewnienie dobrego kontrastu względem tła:
    - jeśli tło jest jasne – tekst ciemny + delikatny cień,
    - jeśli tło jest złożone – półprzezroczysty overlay za tekstem (np. `bg-slate-900/40`).

---

## Krok 3 – Kolumna prawa (zdjęcie)

- **Zawartość**:
  - `div` jako kontener na obraz.
  - Użyć `next/image` dla optymalizacji w Next.js.
- **Styl**:
  - Ustalić proporcje obrazu (np. `aspect-[4/5]` lub kwadrat) i zaokrąglone rogi.
  - Wyrównanie pionowe do środka sekcji (`align-items: center`).
  - Dodać delikatny cień, border lub efekt hover (lekki zoom).

---

## Krok 4 – Rozmieszczenie i responsywność

- **Desktop (≥ 1024px)**:
  - Grid/flex w 2 kolumnach 50/50 lub 55/45.
  - Lewa kolumna wyrównana do lewej, prawa do prawej.
  - Obie kolumny wycentrowane pionowo (`align-items: center`).
- **Tablet / mobile (na później)**:
  - Przełączenie na 1 kolumnę (najpierw tekst, potem obraz).
  - Zwiększenie paddingu pionowego, aby sekcja nadal wyglądała jak pełnoprawny hero.

---

## Krok 5 – Detale wizualne

- **Tło**:
  - `background-size: cover;`
  - `background-position: center;`
  - `background-repeat: no-repeat;`
  - Opcjonalny overlay na całej sekcji (pseudo-element lub dodatkowy `div` z `background-color` + `opacity`).
- **Typografia**:
  - Spójna z resztą projektu (font z `globals.css`).
  - `h1` ~ 3–4rem, podtytuł ~ 1.1–1.25rem.
- **Spacing**:
  - Sensowne odstępy między tytułem, podtytułem i przyciskami (np. 12–24px).

---

## Krok 6 – Integracja

- Podpiąć komponent `Hero` w `app/page.tsx` jako główną sekcję powitalną strony.
- Upewnić się, że sekcja dobrze współgra z istniejącym nagłówkiem (`SiteHeader`) i nawigacją.


