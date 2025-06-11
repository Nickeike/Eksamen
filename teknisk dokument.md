# Prosjektoversikt

Dette prosjektet inneheld utviklinga av nettsider for **Skogvika Vidaregåande Skule**. Nettsidene er designa for å vere **moderne, brukervennlege og interaktive**, med fokus på **estetikk** og **funksjonalitet**. Prosjektet inkluderer fleire sider, som _Heim_, _Personvern_, _Kontakt_ og _Lanseringsfest_.

## Innhald
1. Filstruktur  
2. Nettsidestruktur  
3. Design  
4. Funksjonalitet  
5. Teknologi  
6. Vidare arbeid  

---

## 1. Filstruktur

Prosjektet er organisert med følgande mapper og filer:

```
/EKSAMEN
|-- /bilder
|   |-- administrator.png
|   |-- lærer.png
|   |-- rektor.png
|
|   /brukerstøtte
|   |-- Steg 1 TrueNAS.md
|   |-- Steg 2 nettverkskontroll.md
|
|-- /html
|   |-- index.html
|   |-- internettkart.html
|   |-- kontakt.html
|   |-- lanseringsfest.html
|   |-- personvern.html
|
|-- /src
|   |--main.js
|
|-- /stiler
|   |-- styles.css
|
|-- brukerstøtte.zip
|-- kjelder.md
|-- README.md
|-- teknisk dokument.md

```
---

## 2. Nettsidestruktur

**index.html**  
- Hovudsida med generell informasjon om skulen.  
- Navigasjonsmeny med lenker til andre sider.  
- Seksjon for lanseringsfest med ein påmeldingsknapp.  

**kontakt.html**  
- Kontaktinformasjon med telefonnummer, e-post og adresse.  
- Seksjon for teammedlemmar med bilete og namn.  
- Kontaktskjema for innsending av meldingar.  

**lanseringsfest.html**  
- Informasjon om lanseringsfesten, inkludert dato, stad og program.  
- Ein knapp for påmelding.  

**personvern.html**  
- Informasjon om personvern og GDPR-overholdelse.  

---

## 3. Design

Nettsidene er designa med fokus på **enkelheit og estetikk**.

- **Fargepalett:** Grønn som hovudfarge (`#4CAF50`) med kontrastfargar som kvitt og mørk grå.  
- **Typografi:** Bruk av fonten _Roboto_ for moderne og lesbar tekst.  
- **Responsivitet:** CSS-stilar sikrar at nettsidene fungerer godt på både mobil og desktop.  
- **Knappedesign:** Moderne design med runde hjørner, skuggeeffekt og interaktiv hover-effekt.

```css
.button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
}
```
## 4. Funksjonalitet
Påmeldingsknapp
Knappen på lanseringsfest-sida viser ei melding ved klikk:
```js
document.getElementById('meld-paa-knapp')?.addEventListener('click', () => {
    alert('Takk for påmeldinga! Me ser fram til å sjå deg på lanseringsfesten.');
});
```
 Kontaktskjema
Eit skjema for å sende inn namn, e-post og melding. Funksjonaliteten inkluderer validering og nullstilling av skjemaet etter innsending:
```js
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Skjema sendt inn av: ${name} (${email})`);
    console.log(`Melding: ${message}`);
    alert('Takk for meldinga! Vi vil kontakte deg snart.');
    contactForm.reset();
});

```
## 5. Teknologi
Prosjektet er utvikla med følgande teknologi:

HTML: Struktur for nettsidene.

CSS: Design og layout.

JavaScript: Interaktiv funksjonalitet.