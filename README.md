# Webshop6

Webshop6 är en React-baserad webbapplikation för en e-handelsbutik. Projektet använder React Router för navigering, Bootstrap för styling och en anpassad varukorgsfunktionalitet.

## Funktioner

- **Startsida**: En välkomstsida för användare.
- **Produktlista**: En sida som listar alla tillgängliga produkter.
- **Produktsida**: En detaljerad sida för varje produkt med längre beskrivningar.
- **Varukorg**: Möjlighet att lägga till produkter i en varukorg.
- **Kassa**: En sida för att slutföra köp.
- **Om oss**: En informationssida om butiken.

## Teknologier

- **React**: För att bygga användargränssnittet.
- **React Router**: För att hantera navigering mellan sidor.
- **Bootstrap**: För grundläggande styling.
- **CSS**: För anpassad styling (`App.css`).
- **Context API**: För att hantera global tillståndshantering (t.ex. varukorgen).

## Installation

1. Klona detta repository:
   ```bash
   git clone https://github.com/<ditt-användarnamn>/webshop6.git

   2. cd webshop6
   3. npm install
   4. npm start

## Projektstruktur

```plaintext
src/
├── components/         # Återanvändbara React-komponenter
│   ├── Header.js       # Sidhuvud
│   ├── Footer.js       # Sidfot
│   └── ProductCard.js  # Kort för att visa produkter
├── context/            # Context API för global tillståndshantering
│   └── CartContext.js  # Hantering av varukorg
├── data/               # Statisk data
│   └── products.js     # Lista över produkter
├── pages/              # Sidor i applikationen
│   ├── HomePage.js     # Startsida
│   ├── ProductsPage.js # Produktlista
│   ├── ProductPage.js  # Produktsida
│   ├── CartPage.js     # Varukorg
│   ├── CheckoutPage.js # Kassa
│   └── AboutPage.js    # Om oss
├── App.js              # Huvudkomponenten
├── App.css             # Anpassad styling
└── index.js            # Ingångspunkt för applikationen
